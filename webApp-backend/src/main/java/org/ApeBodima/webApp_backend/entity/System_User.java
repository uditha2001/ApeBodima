package org.ApeBodima.webApp_backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "System_User")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class System_User{

    @Id
    @Column(name="sysUserNIC",length = 12)
    private String sysUserNIC;
    @Column(name = "name",length = 64)
    private String name;
    @Column(name = "username",length = 24,unique = true,nullable = false)
    private String username;
    @Column(name = "password",length = 24,nullable = false)
    private String password;
    @Column(name="scNum",length = 13,unique = true,nullable = false)
    private String scNUm;
}
