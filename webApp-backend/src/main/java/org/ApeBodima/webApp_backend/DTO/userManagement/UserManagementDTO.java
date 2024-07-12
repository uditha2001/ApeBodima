package org.ApeBodima.webApp_backend.DTO.userManagement;

import lombok.*;

@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode

public class UserManagementDTO {

        private String webAppUserNIC;
        private String name;
        private String username;
        private String scNUm;
        private String currentLocation;
        private String email;
        private byte[] profileImg;



}

