package org.ApeBodima.webApp_backend.controller;

import org.ApeBodima.webApp_backend.DTO.UserDTO;
import org.ApeBodima.webApp_backend.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/register")
public class RegisterController {

    private RegisterService registerService;
    @Autowired
    public void setRegisterService(RegisterService registerService) {
        this.registerService = registerService;
    }

    @PostMapping(value = {"/public/user"})
    public ResponseEntity<String> createUser(@RequestBody UserDTO userDto){
        registerService.addPublicUser(userDto);
        return ResponseEntity.ok("Register success");
    }
}
