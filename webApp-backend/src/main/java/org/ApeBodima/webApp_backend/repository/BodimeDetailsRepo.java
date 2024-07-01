package org.ApeBodima.webApp_backend.repository;

import org.ApeBodima.webApp_backend.entity.Bodime_Detail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;


@Repository//Repository: This annotation is used to indicate that the class is a repository.
// Spring will automatically detect and manage beans annotated with @Repository.
@EnableJpaRepositories
public interface BodimeDetailsRepo extends JpaRepository<Bodime_Detail, String> {
}
