package org.ApeBodima.webApp_backend.service.loginService;

import lombok.RequiredArgsConstructor;
import org.ApeBodima.webApp_backend.repository.WebAppUserRepo;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService implements UserDetailsService {
    public final static String USER_NOT_FOUND_MSG= "User with %s not found";
    private final WebAppUserRepo webAppUserRepo;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return webAppUserRepo.findByUsernameOrEmail(username,username)
                .orElseThrow(()-> new UsernameNotFoundException(USER_NOT_FOUND_MSG));
    }

    /*-------------------------------------
     *     Get currently logged in user name
     *------------------------------------*/
    public String getCurrentLoggedInUsername() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null) {
            return authentication.getName();
        }
        return null;
    }

}
