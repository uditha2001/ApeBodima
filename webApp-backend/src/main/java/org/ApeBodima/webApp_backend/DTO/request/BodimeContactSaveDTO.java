package org.ApeBodima.webApp_backend.DTO.request;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.ApeBodima.webApp_backend.entity.Bodime_Detail;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BodimeContactSaveDTO {

    private String contact_num;
}
