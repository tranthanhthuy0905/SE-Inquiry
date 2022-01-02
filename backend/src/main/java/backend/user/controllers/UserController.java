package backend.user.controllers;

import backend.user.models.Role;
import backend.user.models.UserEntity;
import backend.user.services.UserService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.*;

@RestController
@RequestMapping("api/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping()
    public ResponseEntity<Dictionary> getAllUsers(@RequestParam("limit") int limit, @RequestParam("offset") int offset) {
        return ResponseEntity.ok().body(userService.getUsers(limit, offset));
    }

    @PostMapping("/create-user")
    public ResponseEntity<UserEntity> createUser(@RequestBody UserEntity user) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("api/v1/user/create-user").toUriString());
        return ResponseEntity.created(uri).body(userService.saveUser(user));
    }

    @PostMapping("/create-role")
    public ResponseEntity<Role> createRole(@RequestBody Role role) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("api/v1/user/create-role").toUriString());
        return ResponseEntity.created(uri).body(userService.saveRole(role));
    }

    @PostMapping("/add-role")
    public ResponseEntity<?> addRole (@RequestBody RoleToUserForm form) {
        userService.addRoleToUser(form.getUserId(), form.getRoleId());
        return ResponseEntity.ok().build();
    }

}
@Data
class RoleToUserForm {
    private Long userId;
    private Long roleId;
}
