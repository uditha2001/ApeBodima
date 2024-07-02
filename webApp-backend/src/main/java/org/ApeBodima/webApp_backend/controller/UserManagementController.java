package org.ApeBodima.webApp_backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/usrMng")
public class UserManagementController {

    @PostMapping(value = {"/user"})
    public ResponseEntity<String> getUserByNic(){
        return ResponseEntity.ok("okay");
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
