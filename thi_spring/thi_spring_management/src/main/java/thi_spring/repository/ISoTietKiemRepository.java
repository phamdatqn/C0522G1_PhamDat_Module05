package thi_spring.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import thi_spring.model.SoTietKiem;

public interface ISoTietKiemRepository extends JpaRepository<SoTietKiem, Integer> {
//    @Query(value = "select * from  where name like %:keySearch% and is_delete = 0", nativeQuery = true)
//    Page<Customer> findByNameCustomer(@Param("keySearch") String keySearch, Pageable pageable);

}
