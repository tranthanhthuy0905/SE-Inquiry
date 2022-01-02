package backend;

import backend.user.models.Role;
import backend.user.models.UserEntity;
import backend.user.services.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	CommandLineRunner run(UserService userService) {
		return args -> {
			Role admin_role = new Role(null, "ADMIN");
			Role user_role = new Role(null, "USER");
			Role superadmin_role = new Role(null, "SUPER_ADMIN");

			userService.saveRole(user_role);
			userService.saveRole(admin_role);
			userService.saveRole(superadmin_role);

			UserEntity superadmin_user = new UserEntity(null, "Tran Thanh Thuy", "Thanh-Thuy", "888489Ttt", new ArrayList<>());
			userService.saveUser(superadmin_user);

			userService.addRoleToUser(superadmin_user.getId(), superadmin_role.getId());
		};
	}
}
