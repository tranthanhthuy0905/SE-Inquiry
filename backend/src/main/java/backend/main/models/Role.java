package backend.main.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "role")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer roleId;

    private String name;
    @OneToMany(mappedBy = "role")
    @JsonBackReference
    private Set<AccountRole> accountRoleList;

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<AccountRole> getAccountRoleList() {
        return accountRoleList;
    }

    public void setAccountRoleList(Set<AccountRole> accountRoleList) {
        this.accountRoleList = accountRoleList;
    }
}

