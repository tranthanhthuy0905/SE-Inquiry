package backend.user.models;

import lombok.*;
import javax.persistence.*;
import java.sql.Timestamp;
import java.util.*;

import static javax.persistence.FetchType.EAGER;
import static javax.persistence.GenerationType.AUTO;

@Entity
@Table(name = "user_db")
@Data
@NoArgsConstructor
public class UserEntity {

    @Id @GeneratedValue(strategy = AUTO)
    private Long id;
    private String name;
    private String username;
    private String password;
    private Timestamp createdAt;
    private Timestamp updatedAt;

    // Fetch all the roles whenever fetching users auto
    @ManyToMany(fetch = EAGER)
    private Collection<Role> roles = new ArrayList<>();

    public UserEntity(Long id, String name, String username, String password, Collection<Role> roles) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        Date date = new Date();
        Timestamp time = new Timestamp(date.getTime());
        this.createdAt = time;
        this.updatedAt = time;
        this.roles = roles;
    }
}
