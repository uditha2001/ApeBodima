package org.ApeBodima.webApp_backend.controller;

import org.ApeBodima.webApp_backend.DTO.request.FavouriteSaveDTO;
import org.ApeBodima.webApp_backend.service.FavouriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/favourite")
@CrossOrigin
public class FavouriteController {

    @Autowired
    private FavouriteService favouriteService;

    @PostMapping("/add")
    public ResponseEntity<String> addFavourite(@RequestBody FavouriteSaveDTO favouriteSaveDTO) {
        String message = favouriteService.addFavourite(favouriteSaveDTO);
        return ResponseEntity.ok(message);
    }
}
