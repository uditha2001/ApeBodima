package org.ApeBodima.webApp_backend.DTO.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FavouriteSaveDTO {
    private String webAppUserNIC;
    private String bodimId;
}
