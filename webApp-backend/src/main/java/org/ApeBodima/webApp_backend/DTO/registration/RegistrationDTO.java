package org.ApeBodima.webApp_backend.DTO.registration;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@ToString
@EqualsAndHashCode
@Getter
@AllArgsConstructor
public class RegistrationDTO {
    private String AppUserNIC;
    private String name;
    private String username;
    private String password;
    private String scNUm;
    private String currentLocation;
    private String email;
}
