package org.ApeBodima.webApp_backend.repository;


import org.ApeBodima.webApp_backend.entity.Bodime_Detail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BodimFilterDetailsRepo extends JpaRepository<Bodime_Detail,String> {
    List<Bodime_Detail> findByPriceBetweenAndTypeContainingIgnoreCase(Double minPrice, Double maxPrice, String type);
}
