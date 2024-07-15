package org.ApeBodima.webApp_backend.repository;

import org.ApeBodima.webApp_backend.entity.Bodime_Detail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository//Repository: This annotation is used to indicate that the class is a repository.
// Spring will automatically detect and manage beans annotated with @Repository.
@EnableJpaRepositories
public interface BodimeDetailsRepo extends JpaRepository<Bodime_Detail, String> {

    Page<Bodime_Detail> findAllByCapacity(Pageable pageable, int capacity);

    Page<Bodime_Detail> findAllByDistanceToUniLessThanEqual(Pageable pageable, double distance);


}
