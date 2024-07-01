package org.ApeBodima.webApp_backend.service;

import org.ApeBodima.webApp_backend.DTO.UserDTO;
import org.ApeBodima.webApp_backend.repository.WebAppUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {

    private WebAppUser webAppUser;

    @Autowired
    public void setWebAppUser(WebAppUser webAppUser) {
        this.webAppUser = webAppUser;
    }

    public void addPublicUser(UserDTO userDto) {

    }
}
