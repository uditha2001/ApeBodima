package org.ApeBodima.webApp_backend.service;

import org.ApeBodima.webApp_backend.DTO.request.BodimeContactSaveDTO;
import org.ApeBodima.webApp_backend.DTO.request.BodimeDetailsSaveDTO;

import java.util.List;

public interface BodimeDetailsService {
    String save(BodimeDetailsSaveDTO bodimeDetailsSaveDTO);

    BodimeDetailsSaveDTO getBodimeDetailsById(String bodimId);

    List<BodimeDetailsSaveDTO> getAllBodimeDetails(int page , int size);

    List<BodimeDetailsSaveDTO> getAllBodimeDetailsByCapacity(int page, int size, int capacity);

    List<BodimeDetailsSaveDTO> getAllBodimeDetailsByDistance(int page, int size, double distance);
}
