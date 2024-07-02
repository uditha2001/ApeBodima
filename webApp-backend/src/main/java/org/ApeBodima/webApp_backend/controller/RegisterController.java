package org.ApeBodima.webApp_backend.controller;

import org.ApeBodima.webApp_backend.DTO.registration.RegistrationDTO;
import org.ApeBodima.webApp_backend.service.registrationService.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/registration")
public class RegisterController {

    //setter injection for registerService
    private RegisterService registerService;
    @Autowired
    public void setRegisterService(RegisterService registerService) {
        this.registerService = registerService;
    }

    //Define the Endpoint for registration
    @PostMapping("/user")
    public ResponseEntity<String> createUser(@RequestBody RegistrationDTO registrationDTO){
        return ResponseEntity.ok(registerService.addPublicUser(registrationDTO));
    }
}
