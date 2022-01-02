package backend.user.models;

import lombok.*;
import javax.persistence.*;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Table(name = "role_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Role {
    @Id @GeneratedValue(strategy = AUTO)
    private Long id;
    private String name;
}
