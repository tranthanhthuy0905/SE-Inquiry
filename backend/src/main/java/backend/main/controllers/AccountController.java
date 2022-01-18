package backend.main.controllers;


import backend.main.jwt.JwtUtility;
import backend.main.models.Account;
import backend.main.payload.reponse.JwtResponse;
import backend.main.payload.reponse.MessageResponse;
import backend.main.payload.request.LoginRequest;
import backend.main.payload.request.SignupRequest;
import backend.main.payload.request.VerifyRequest;
import backend.main.services.AccountService;
import backend.main.services.RoleService;
import backend.main.services.impl.AccountDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.validation.Valid;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/public")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AccountController {

    @Autowired
    private JwtUtility jwtUtility;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private AccountService accountService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private PasswordEncoder encoder;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getAccountName(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtility.generateJwtToken(loginRequest.getAccountName());
        AccountDetailsImpl userDetails = (AccountDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                roles));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) throws IOException, MessagingException {
       String username = signUpRequest.getAccountName();
       String email = signUpRequest.getEmail();

        if (username.equals(null)) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Username is required!"));
        }
        if (accountService.existsByUsername(username) != null) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Username is used!"));
        }
        if (accountService.existsByEmail(email) != null) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Email is used!"));
        }

        // Create new user's account
        Account account = new Account(signUpRequest.getAccountName(), signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));
        //Add new user's account to database
        accountService.addNew(account.getAccountName(), account.getEncryptPw(), signUpRequest.getEmail());
        //Find ID user's account newest after add to database
        Integer idAccountAfterCreated = accountService.findIdUserByUserName(account.getAccountName());
        //Set default role is "ROLE_USER"
        roleService.setDefaultRole(idAccountAfterCreated, 2);

        return ResponseEntity.ok(new MessageResponse("Successfully register! Check your email to complete the registration!"));
    }

    @PostMapping("/verify")
    public ResponseEntity<?> VerifyEmail(@RequestBody VerifyRequest code) {
        Boolean isVerified = accountService.findAccountByVerificationCode(code.getCode());
        if (isVerified) {
            return ResponseEntity.ok(new MessageResponse("The account is regitered"));
        } else {
            return ResponseEntity.ok(new MessageResponse("OTP is incorrect!"));
        }
    }
}
