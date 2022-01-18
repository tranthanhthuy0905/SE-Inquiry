package backend.main.services;


import backend.main.models.Account;

import javax.mail.MessagingException;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.List;


public interface AccountService {

    Account findAccountByUserName(String username);

    Integer findIdUserByUserName(String username);

    String existsByUsername(String username);

    Boolean existsById(Integer id);

    String existsByEmail(String mail);



    void addNew(String username, String password, String email) throws IOException, MessagingException;

    Boolean findAccountByVerificationCode(String code);


    Boolean findAccountByVerificationCodeToResetPassword(String code);

    void addVerificationCode(String username) throws UnsupportedEncodingException, MessagingException;



    void addNew(String username, String password);


    void saveNewPassword(String password,String code);

}
