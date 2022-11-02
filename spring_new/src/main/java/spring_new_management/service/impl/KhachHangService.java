package spring_new_management.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring_new_management.model.KhachHang;
import spring_new_management.repository.IKhachHangRepository;
import spring_new_management.service.IKhachHangService;

import java.util.List;
import java.util.Optional;

@Service
public class KhachHangService implements IKhachHangService {

    @Autowired
    private IKhachHangRepository iKhachHangRepository;
    @Override
    public List<KhachHang> findAll() {
        return iKhachHangRepository.findAll();
    }

    @Override
    public Optional<KhachHang> findById(int id) {
        return iKhachHangRepository.findById(id);
    }
}
