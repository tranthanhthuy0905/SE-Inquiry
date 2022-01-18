package backend.main.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity(name = "account")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id")
    private Integer accountId;

    @Column(name = "account_name")
    private String accountName;

    @Column(name = "encrypt_pw")
    private String encryptPw;

    @Column(name = "time_register")
    private String timeReg;

    @Column(name = "is_enabled")
    private Boolean isEnabled;

    @Column(name = "verification_code")
    private String verificationCode;

    private String email;

    @OneToMany(mappedBy = "account")
    @JsonBackReference
    private Set<AccountRole> accountRoleList;



    public Account(String accountName, String email, String encryptPw) {
        this.email = email;
        this.accountName = accountName;
        this.encryptPw = encryptPw;
    }

    public void setAccountId(Integer accountId) {
        this.accountId = accountId;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }

    public void setEncryptPw(String encryptPw) {
        this.encryptPw = encryptPw;
    }

    public void setTimeReg(String timeReg) {
        this.timeReg = timeReg;
    }

    public void setEnabled(Boolean enabled) {
        isEnabled = enabled;
    }

    public void setVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setAccountRoleList(Set<AccountRole> accountRoleList) {
        this.accountRoleList = accountRoleList;
    }

    public Integer getAccountId() {
        return accountId;
    }

    public String getAccountName() {
        return accountName;
    }

    public String getEncryptPw() {
        return encryptPw;
    }

    public String getTimeReg() {
        return timeReg;
    }

    public Boolean getEnabled() {
        return isEnabled;
    }

    public String getVerificationCode() {
        return verificationCode;
    }

    public String getEmail() {
        return email;
    }

    public Set<AccountRole> getAccountRoleList() {
        return accountRoleList;
    }
}
