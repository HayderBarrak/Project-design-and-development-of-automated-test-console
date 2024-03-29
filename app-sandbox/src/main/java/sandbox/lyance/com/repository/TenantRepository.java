package sandbox.lyance.com.repository;

import sandbox.lyance.com.domain.Tenant;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Tenant entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TenantRepository extends JpaRepository<Tenant, Long> {


    Tenant findByDomainName(String domainName);

}
