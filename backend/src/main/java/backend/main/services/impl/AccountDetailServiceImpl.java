package backend.main.services.impl;

import backend.main.models.Account;
import backend.main.repositories.AccountRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class AccountDetailServiceImpl implements UserDetailsService {

    @Autowired
    AccountRepository accountRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String accountName)  {
        Account account = accountRepository.findAccountByAccountName(accountName);
        if(account==null){
            throw new UsernameNotFoundException("Account " + accountName + " was not found in the database");
        }
        return AccountDetailsImpl.build(account);
    }
}
