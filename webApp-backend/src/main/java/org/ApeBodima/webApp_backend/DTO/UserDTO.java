package org.ApeBodima.webApp_backend.DTO;

import lombok.*;
import org.springframework.stereotype.Component;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class UserDTO {
    private String userNIC;
    private String name;
    private String username;
    private String password;
    private String scNUm;
    private String currentLocation;
}

