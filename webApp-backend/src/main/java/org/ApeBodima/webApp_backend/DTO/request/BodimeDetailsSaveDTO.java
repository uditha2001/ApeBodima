package org.ApeBodima.webApp_backend.DTO.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class BodimeDetailsSaveDTO {

    private String bodimId;
    private double price;
    private int capacity;
    private double distanceToUni;
    private String type;
    private int numChairs;
    private int numFans;
    private int numTables;
    private int numNets;
    private int kitchen;
    private String locationAddress;
    private String bodimPlaceName;
    private List<BodimeContactSaveDTO> contacts;
    private List<BodimeReviewSaveDTO> reviews;
}
