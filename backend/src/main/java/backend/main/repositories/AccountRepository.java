package backend.main.repositories;


import backend.main.models.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;


@Repository
@Transactional
public interface AccountRepository extends JpaRepository<Account, Integer> {

    Account findAccountByAccountName(String username);


    @Query(value = "select account_id from account where account_name = ?1", nativeQuery = true)
    Integer findIdUserByUserName(String account_name);


    @Query(value = "SELECT account_name from account where account_name = ?1", nativeQuery = true)
    String existsByUsername(String account_name);


    @Query(value = "SELECT email FROM account where email= ?1", nativeQuery = true)
    String existsByEmail(String email);


    @Modifying
    @Query(value = "insert into account(account_name,encrypt_pw,is_enabled,verification_code,email,time_register) values (?1,?2,?3,?4,?5,?6)", nativeQuery = true)
    void addNew(String username, String password, Boolean isEnable, String verifiedCode, String email, LocalDate localDateTime);


    @Query(value = "select * from account where verification_code =?1",nativeQuery = true)
    Account findAccountByVerificationCode(String verifyCode);


    @Modifying
    @Query(value ="update account set verification_code=?1 where user_name =?2",nativeQuery = true)
    void addVerificationCode(String code,String username);

    @Modifying
    @Query(value = "insert into account(account_name,encrypt_pw) values (?1,?2)", nativeQuery = true)
    void addNewAccount(String username, String password);

    @Modifying
    @Query(value = "update account set encrypt_pw =?1,verification_code=null where verification_code=?2 ",nativeQuery = true)
    void saveNewPassword(String password, String code);
}
