package org.ApeBodima.webApp_backend.service;

import org.ApeBodima.webApp_backend.DTO.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    private UserDTO userDto;
    @Autowired
    public void setUserDto(UserDTO userDto) {
        this.userDto = userDto;
    }

    public UserDTO getUserByNic(String userNic) {
        return userDto;
    }
}
