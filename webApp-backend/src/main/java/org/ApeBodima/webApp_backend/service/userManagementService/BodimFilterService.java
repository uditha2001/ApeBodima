package org.ApeBodima.webApp_backend.service.userManagementService;

import org.ApeBodima.webApp_backend.DTO.request.BodimFilterDTO;
import org.ApeBodima.webApp_backend.entity.Bodime_Detail;
import org.ApeBodima.webApp_backend.repository.BodimFilterDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class BodimFilterService
{
    @Autowired
    private BodimFilterDetailsRepo bodimFilterDetailsRepo;

    public List<Bodime_Detail> filterBodimPlaces(BodimFilterDTO bodimFilterDTO){
        Double minPrice = bodimFilterDTO != null ? bodimFilterDTO.getMinPrice() : Double.MIN_VALUE;
        Double maxPrice = bodimFilterDTO.getMaxPrice() != null ? bodimFilterDTO.getMaxPrice() : Double.MAX_VALUE;
        String type = bodimFilterDTO.getType() != null ? bodimFilterDTO.getType() : "";

        return bodimFilterDetailsRepo.findByPriceBetweenAndTypeContainingIgnoreCase(minPrice, maxPrice, type);
    }
}
