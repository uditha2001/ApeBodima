package org.ApeBodima.webApp_backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class SystemUserController {


        @GetMapping(value = {"/user"})
        public WebUser getUser(){
            //return (WebUser) user details
        }



        @DeleteMapping(value = {"/user/delete"})
        public ResponseEntity<String> deleteUser(){
            //delete data
        }
}
