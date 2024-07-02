package org.ApeBodima.webApp_backend.controller;


import org.ApeBodima.webApp_backend.service.FavoriteBoardingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/favourites")

public class FavoriteBoardingController {
    @Autowired
    private FavoriteBoardingService favoriteBoardingService;

    @DeleteMapping("/{userid}/{bodimId}")
    public ResponseEntity<?> deleteFavoriteBoarding(@PathVariable String userid, @PathVariable String bodimId) {
        if(!favoriteBoardingService.isFavouriteBoarding(userid, bodimId)){
            return ResponseEntity.badRequest().body("This boarding place is not in the user's favorite list.");

        }
        else{
            favoriteBoardingService.removeFavouriteBoarding(userid, bodimId);
            return ResponseEntity.ok().body("Boarding place removed from favorites successfully");
        }
    }
}
