package backend.main.repositories;


import backend.main.models.AccountRole;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRoleRepository extends JpaRepository<AccountRole,Integer> {
}
