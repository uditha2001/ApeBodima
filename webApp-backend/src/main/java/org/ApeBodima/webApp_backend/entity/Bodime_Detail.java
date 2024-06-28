package org.ApeBodima.webApp_backend.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

}
