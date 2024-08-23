package org.ApeBodima.webApp_backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/bodimContacts")
public class BodimContactDetailsController {
    @PostMapping("/contactsSave")
    public ResponseEntity<String> saveBodimContacts(){
        return ResponseEntity.ok("Saved");
    }
}
