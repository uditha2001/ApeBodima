package org.ApeBodima.webApp_backend.service;


import jakarta.transaction.Transactional;
import org.ApeBodima.webApp_backend.repository.FavouriteBoardingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//@Service
public class FavoriteBoardingService {

//    @Autowired
//    private FavouriteBoardingRepo favouriteBoardingRepo;
//
//    public boolean isFavouriteBoarding(String userId,String bodimId){
//        return favouriteBoardingRepo.findByUserIdAndBodimeDetail_BodimId(userId,bodimId).isPresent();
//    }
//
//    @Transactional
//    public void removeFavouriteBoarding(String userId,String bodimId){
//        favouriteBoardingRepo.deleteByUserIdAndBodimeDetail_BodimId(userId, bodimId);
//    }
}
