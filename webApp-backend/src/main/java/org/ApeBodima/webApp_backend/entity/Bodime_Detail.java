package org.ApeBodima.webApp_backend.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "bodime_details")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Bodime_Detail {
    @Id
    @Column(name = "bodim_ID", length = 4)
    private String bodimId;

    @Column(name = "price")
    private double price;

    @Column(name = "capacity")
    private int capacity;

    @Column(name = "distance_to_UNI")
    private double distanceToUni;


    @Column(name = "type")
    private String type;

    @Column(name = "num_chairs")
    private int numChairs;

    @Column(name = "num_fans")
    private int numFans;

    @Column(name = "num_tables")
    private int numTables;

    @Column(name = "num_nets")
    private int numNets;

    @Column(name = "kitchen")
    private int kitchen;

    @Column(name = "location_address", length = 250)
    private String locationAddress;

    @Column(name = "bodim_place_name", length = 200)
    private String bodimPlaceName;

    @OneToMany(mappedBy = "bodime_details")
    private List<Bodime_Contact> bodime_contacts;

    @OneToMany(mappedBy = "bodime_details")
    private List<Bodime_Review> bodime_reviews;

    @OneToMany(mappedBy = "bodime_details")
    private List<Bodime_Photos> bodime_photos;
}
