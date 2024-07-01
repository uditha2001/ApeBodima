package org.ApeBodima.webApp_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name ="web_app_user" )
@AllArgsConstructor
@NoArgsConstructor
@Data
public class WebAppUser {
    @Id
    @Column(name = "web_app_usernic", length = 12)
    private String webAppUserNIC;

    @Column(name = "name", length = 64)
    private String name;

    @Column(name = "username", length = 24)
    private String username;

    @Column(name = "password", length = 24)
    private String password;

    @Column(name = "sc_num", length = 13)
    private String scNum;

    @Column(name = "current_location", length = 24)
    private String currentLocation;
}
