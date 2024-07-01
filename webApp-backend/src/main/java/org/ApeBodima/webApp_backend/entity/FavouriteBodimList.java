package org.ApeBodima.webApp_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "favourite_bodim_list", uniqueConstraints = @UniqueConstraint(columnNames = {"web_app_usernic", "bodim_ID"}))
@AllArgsConstructor
@NoArgsConstructor
@Data
public class FavouriteBodimList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "web_app_usernic", length = 12, nullable = false)
    private String webAppUserNIC;

    @Column(name = "bodim_id", length = 4, nullable = false)
    private String bodimId;
}
