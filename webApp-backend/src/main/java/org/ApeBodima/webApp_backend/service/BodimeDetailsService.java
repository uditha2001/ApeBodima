package org.ApeBodima.webApp_backend.service;

import org.ApeBodima.webApp_backend.DTO.request.BodimeContactSaveDTO;
import org.ApeBodima.webApp_backend.DTO.request.BodimeDetailsSaveDTO;

import java.util.List;

public interface BodimeDetailsService {
    String save(BodimeDetailsSaveDTO bodimeDetailsSaveDTO);

    BodimeDetailsSaveDTO getBodimeDetailsById(String bodimId);

    List<BodimeDetailsSaveDTO> getAllBodimeDetails();
}
