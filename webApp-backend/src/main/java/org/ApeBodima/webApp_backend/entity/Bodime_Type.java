package org.ApeBodima.webApp_backend.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "bodime_type")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Bodime_Type {
    @Id
    @Column(name = "type_id",length = 4)
    private String typeId;

    @Column(name = "type_name",length=48)
    private String typeName;

    @Column(name = "description")
    private String description;
}
