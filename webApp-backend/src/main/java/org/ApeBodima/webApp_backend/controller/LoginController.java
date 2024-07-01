package org.ApeBodima.webApp_backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/login")
public class LoginController {
        @GetMapping(value = {"/webapp/user"})
        public ResponseEntity<String> getUser(){
                return ResponseEntity.ok("Login success:");
        }

}
