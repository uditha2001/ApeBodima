package org.ApeBodima.webApp_backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name="WebApp_user")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class WebApp_User {

    @Id
    @Column(name = "webAppUserNIC",length = 12)
    private String webAppUserNIC;
    @Column(name = "name",length = 64)
    private String name;
    @Column(name = "username",length = 24,unique = true,nullable = false)
    private String username;
    @Column(name = "password",length = 24,nullable = false)
    private String password;
    @Column(name="scNum",length = 13)
    private String scNUm;
    @Column(name="currentLocation",length = 24)
    private String currentLocation;
}
