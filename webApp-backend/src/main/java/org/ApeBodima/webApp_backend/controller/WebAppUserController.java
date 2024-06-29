package org.ApeBodima.webApp_backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class WebAppUserController {
    @GetMapping(value = {"/user"})
    public WebUser getUser(){
        //return user details(WebUser)
    }

    @PostMapping(value = {"/user/create"})
    public WebUser createUser(User user){
        //create new user
    }

    @PutMapping(value = {"/user/update"})
    public ResponseEntity<WebUser> updateUser(){
        //update data
    }

    @DeleteMapping(value = {"/user/delete"})
    public ResponseEntity<String> deleteUser(){
        //delete data
    }

}
