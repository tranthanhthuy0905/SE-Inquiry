package backend.main.services.impl;

import backend.main.models.Account;

import backend.main.repositories.AccountRepository;
import backend.main.services.AccountService;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;


import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.time.LocalDate;


@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    AccountRepository accountRepository;

    @Autowired
    JavaMailSender javaMailSender;

    @Override
    public Account findAccountByUserName(String username) {
        return accountRepository.findAccountByAccountName(username);
    }

    @Override
    public Integer findIdUserByUserName(String username) {
        return accountRepository.findIdUserByUserName(username);
    }

    @Override
    public String existsByUsername(String username) {
        return accountRepository.existsByUsername(username);
    }


    @Override
    public Boolean existsById(Integer id) {
        return accountRepository.existsById(id);
    }

    @Override
    public String existsByEmail(String mail) {
        return accountRepository.existsByEmail(mail);
    }


    @Override
    public void addNew(String username, String password) {
        accountRepository.addNewAccount(username, password);
    }

    @Override
    public void saveNewPassword(String password, String code) {
        accountRepository.saveNewPassword(password, code);
    }


    @Override
    public void addNew(String username, String password, String email) throws IOException, MessagingException {
        String randomCode = RandomString.make(5);
        LocalDate localDateTime = LocalDate.now();
        accountRepository.addNew(username, password, false, randomCode, email,localDateTime);
        sendVerificationEmail(username, email, randomCode);
    }


    @Override
    public Boolean findAccountByVerificationCode(String code) {
        Account account = accountRepository.findAccountByVerificationCode(code);
        if (account == null || account.getEnabled()) {
            return false;
        } else {
            account.setEnabled(true);
            account.setVerificationCode(null);
            accountRepository.save(account);
            return true;
        }
    }


    @Override
    public Boolean findAccountByVerificationCodeToResetPassword(String code) {
        Account account = accountRepository.findAccountByVerificationCode(code);
        return account != null;
    }


    @Override
    public void addVerificationCode(String username) throws UnsupportedEncodingException, MessagingException {
        String code = RandomString.make(5);
        accountRepository.addVerificationCode(code, username);
        Account account = accountRepository.findAccountByVerificationCode(code);
        this.sendVerificationEmailForResetPassWord(account.getAccountName(), code, account.getEmail());
    }

    public void sendVerificationEmail(String accountName, String email, String randomCode) throws MessagingException, IOException {
        String mailContent = "";
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, "UTF-8");
        helper.setTo(email);
        helper.setFrom("Chat_APP", "SE-Inquiry");
        helper.setSubject("Registration Code");
        mailContent = "<h1>" + randomCode + "<h1>";
        helper.setText(mailContent, true);
        javaMailSender.send(message);
    }


    public void sendVerificationEmailForResetPassWord(String userName, String randomCode, String email) throws MessagingException, UnsupportedEncodingException {
        String subject = "Please verify your email address";
        String mailContent = "";
        String confirmUrl = "http://localhost:4200/verify-reset-password?code=" + randomCode;


        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, "UTF-8");
        helper.setFrom("vanlinh12b5@gmail.com", "TRUNG TÂM Y TẾ DỰ PHÒNG ĐÀ NẴNG");
        helper.setTo(email);
        helper.setSubject(subject);
        mailContent = "<p sytle='color:red;'>Xin chào " + userName + " ,<p>" + "<p> Nhấn vào link sau để xác thực email của bạn:</p>" +
                "<h3><a href='" + confirmUrl + "'>Link Xác thực( nhấn vào đây)!</a></h3>" +
                "<p>TRUNG TÂM Y TẾ DỰ PHÒNG ĐÀ NẴNG</p>";
        helper.setText(mailContent, true);
        javaMailSender.send(message);
    }


}
