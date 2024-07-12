package org.ApeBodima.webApp_backend.service.IMPL;

import org.ApeBodima.webApp_backend.DTO.request.FavouriteSaveDTO;
import org.ApeBodima.webApp_backend.entity.FavouriteBodimList;
import org.ApeBodima.webApp_backend.repository.FavouriteBodimListRepo;
import org.ApeBodima.webApp_backend.service.serviceInterFaces.FavouriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FavouriteServiceIMPL implements FavouriteService {

    @Autowired
    private FavouriteBodimListRepo favouriteBodimListRepo;

    @Override
    public String addFavourite(FavouriteSaveDTO favouriteSaveDTO) {
        FavouriteBodimList favouriteBodimList = new FavouriteBodimList();
        favouriteBodimList.setWebAppUserNIC(favouriteSaveDTO.getWebAppUserNIC());
        favouriteBodimList.setBodimId(favouriteSaveDTO.getBodimId());

        favouriteBodimListRepo.save(favouriteBodimList);

        return "Boarding place added to your favourite list successfully.";
    }
}
