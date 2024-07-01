package org.ApeBodima.webApp_backend.controller;

import org.ApeBodima.webApp_backend.DTO.UserDTO;
import org.ApeBodima.webApp_backend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/usrMng")
public class UserManagementController {

    @GetMapping(value = {"/user/{userNic}"})
    public ResponseEntity<String> getUserByNic(@PathVariable String userNic){
        return ResponseEntity.ok(userNic);
    }
    @PutMapping(value = {"/update"})
    public ResponseEntity<String> updateUser(){
        return ResponseEntity.ok("User management-update");
    }

    @DeleteMapping(value = {"/delete"})
    public ResponseEntity<String> deleteUser(){
        return ResponseEntity.ok("User management-delete");
    }

}
