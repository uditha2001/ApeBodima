package org.ApeBodima.webApp_backend.service.registrationService;

import lombok.RequiredArgsConstructor;
import org.ApeBodima.webApp_backend.DTO.registration.RegistrationDTO;
import org.ApeBodima.webApp_backend.config.security.PasswordEncoder;
import org.ApeBodima.webApp_backend.entity.AppUserRoleEnum;
import org.ApeBodima.webApp_backend.entity.WebApp_User;
import org.ApeBodima.webApp_backend.repository.WebAppUserRepo;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RegisterService implements UserDetailsService{
    public final static String USER_NOT_FOUND_MSG= "User with %s not found";
    private final WebAppUserRepo webAppUserRepo;
    private final PasswordEncoder passwordEncoder;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return webAppUserRepo.findByUsername(username).orElseThrow(()->
                new UsernameNotFoundException(USER_NOT_FOUND_MSG));
    }


    /*-------------------------------------
     *     Public user adding service
     *------------------------------------*/
    public String addPublicUser(RegistrationDTO registrationDTO) {
        boolean isEmailValid=emailValidator(registrationDTO.getEmail());
        boolean isUserNameValid=userNameValidator(registrationDTO.getUsername());
        boolean isUserNameTaken=userNameUniqueness(registrationDTO.getUsername());
        boolean isNicValid=nicValidator(registrationDTO.getAppUserNIC());
        boolean isNicTaken=nicUniqueness(registrationDTO.getAppUserNIC());

        if(!isEmailValid){
            return "Not a valid email address";
        }
        if(!isUserNameValid){
            return "Sorry! Not a valid username";
        }
        if(isUserNameTaken){
            return "Sorry! User name already taken";
        }
        if(!isNicValid){
            return "Sorry! Not a valid NIC";
        }
        if(isNicTaken){
            return "You have already registered with: "+registrationDTO.getAppUserNIC();
        }
        //TODO: use model mapper to map DTO an web app user
        WebApp_User webApp_user=new WebApp_User(
                registrationDTO.getAppUserNIC(),
                registrationDTO.getName(),
                registrationDTO.getEmail(),
                registrationDTO.getUsername(),
                encodedPassword(registrationDTO.getPassword()),
                registrationDTO.getScNUm(),
                registrationDTO.getCurrentLocation(),
                AppUserRoleEnum.USER);

        //TODO : SEND TOKEN USING JWT

        webAppUserRepo.saveAndFlush(webApp_user);
        return "Success!, Create new user: "+webApp_user.toString();
    }

    public boolean emailValidator(String email){
        //TODO: Regex to validate email;
        return true;
    }

    public boolean userNameValidator(String userName){
        //TODO: check the username valid or not
        return true;
    }
    public boolean userNameUniqueness(String userName){
        return webAppUserRepo.findByUsername(userName).isPresent();
    }

    public boolean nicValidator(String userNic){
        //TODO: regex for nic check
        return true;
    }

    public boolean nicUniqueness(String userNic){
        return webAppUserRepo.findByWebAppUserNIC(userNic).isPresent();
    }

    public String encodedPassword(String password){
        return passwordEncoder.bCryptPasswordEncoder().encode(password);
    }
}
