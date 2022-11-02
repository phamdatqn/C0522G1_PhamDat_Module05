package spring_new_management.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import spring_new_management.Dto.ISoTietKiemDto;
import spring_new_management.model.SoTietKiem;

public interface ISoTietKiemService {
    Page<SoTietKiem> findByIdSoTietKiem(int idSeach, Pageable pageable);

    SoTietKiem findById(int id);

    void delete(int id);

    void save(SoTietKiem soTietKiem);

    Page<ISoTietKiemDto> searchAll(int idSeach, String searchName, Pageable pageable);

    ISoTietKiemDto searchById( @Param("id") int id);
}
