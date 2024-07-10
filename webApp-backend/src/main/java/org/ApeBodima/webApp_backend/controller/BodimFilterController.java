package org.ApeBodima.webApp_backend.controller;


import org.ApeBodima.webApp_backend.DTO.request.BodimFilterDTO;
import org.ApeBodima.webApp_backend.entity.Bodime_Detail;
import org.ApeBodima.webApp_backend.service.userManagementService.BodimFilterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/filtering")
public class BodimFilterController {
    @Autowired
    private BodimFilterService bodimFilterService;

    @PostMapping("/filter")
    public ResponseEntity<List<Bodime_Detail>> filterBodimPlaces(@RequestBody BodimFilterDTO bodimFilterDTO) {
        List<Bodime_Detail> filtered = bodimFilterService.filterBodimPlaces(bodimFilterDTO);
        return ResponseEntity.ok(filtered);
    }

}
