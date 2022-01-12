package backend.user.services;

import backend.main.exceptions.ApiRequestException;
import backend.user.models.Role;
import backend.user.models.UserEntity;
import backend.user.repositories.RoleRepository;
import backend.user.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Dictionary;
import java.util.Hashtable;
import java.util.List;

@Service @RequiredArgsConstructor @Transactional @Slf4j
public class UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    public UserEntity saveUser(UserEntity user) {
        log.info("Saving new user to the db");
        return userRepository.save(user);
    }

    public Role saveRole(Role role) {
        log.info("Saving new role {} to the db", role.getName());
        return roleRepository.save(role);
    }

    public void addRoleToUser(Long userId, Long roleId) {
        UserEntity userSelected = userRepository.getById(userId);
        Role roleSelected = roleRepository.getById(roleId);
        log.info("Add role {} to user {}", roleSelected.getName(), userSelected.getName());
        userSelected.getRoles().add(roleSelected);
    }

    public UserEntity getUser(Long id) {
        return userRepository.findById(id).get();
    }

    public Dictionary getUsers(int limit, int offset) {
        Sort arrangement = Sort.by(Sort.Direction.DESC, "createdAt");
        Dictionary result = new Hashtable();
        List<UserEntity> data = userRepository.findAll();
        int count = data.size();

        if (offset < count || (offset == 0 && count == 0)) {
            data = data.subList(offset, count);

            if (limit != 0) {
                if (offset + limit <= data.size()) {
                    data = data.subList(0, limit);
                } else {
                    data = data.subList(0, data.size());
                }
            }
            result.put("count", count);
            result.put("limit", limit);
            result.put("offset", offset);
            result.put("data", data);
            return result;
        } else {
            throw new ApiRequestException("Offset should be less than total of User");
        }
    }
}
