package spring_new_management.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import spring_new_management.Dto.ISoTietKiemDto;
import spring_new_management.model.SoTietKiem;
import spring_new_management.repository.ISoTietKiemRepository;
import spring_new_management.service.ISoTietKiemService;

@Service
public class SoTietKiemService implements ISoTietKiemService {

    @Autowired
    private ISoTietKiemRepository iSoTietKiemRepository;


    @Override
    public Page<SoTietKiem> findByIdSoTietKiem(int idSeach, Pageable pageable) {
        return iSoTietKiemRepository.findByIdSoTietKiem(idSeach,pageable);
    }

    @Override
    public SoTietKiem findById(int id) {
        return iSoTietKiemRepository.findById(id).orElse(null);
    }

    @Override
    public void delete(int id) {
        iSoTietKiemRepository.deleteById(id);
    }

    @Override
    public void save(SoTietKiem soTietKiem) {
        iSoTietKiemRepository.save(soTietKiem);
    }

    @Override
    public Page<ISoTietKiemDto> searchAll(int idSeach, String searchName, Pageable pageable) {
        return iSoTietKiemRepository.searchAll(searchName,idSeach,pageable);
    }

    @Override
    public ISoTietKiemDto searchById(int id) {
        return iSoTietKiemRepository.searchById(id);
    }
}
