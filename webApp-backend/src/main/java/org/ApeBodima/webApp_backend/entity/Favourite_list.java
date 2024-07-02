package org.ApeBodima.webApp_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="favourite_boardings")
@AllArgsConstructor
@NoArgsConstructor
@Data

public class Favourite_list
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="user_id")
    private String user_id;

    @ManyToOne
    @JoinColumn(name="bodim_id",nullable=false)
    private Bodime_Detail bodime_detail;
}
