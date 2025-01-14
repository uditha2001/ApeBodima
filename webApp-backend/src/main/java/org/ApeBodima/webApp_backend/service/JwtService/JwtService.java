package org.ApeBodima.webApp_backend.service.JwtService;

import org.ApeBodima.webApp_backend.entity.WebApp_User;
import org.ApeBodima.webApp_backend.repository.WebAppUserRepo;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class JwtService implements UserDetailsService {
    private final WebAppUserRepo webAppUserRepo;
    public JwtService(WebAppUserRepo webAppUserRepo) {
        this.webAppUserRepo = webAppUserRepo;
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        WebApp_User webAppUser=webAppUserRepo.getByUsername(username);
        if(webAppUser!=null){
            User  user=new User(webAppUser.getUsername(),webAppUser.getPassword(),new ArrayList<>());
            return user;
        }
        else{
            throw new UsernameNotFoundException("User not found");
        }
    }
}
