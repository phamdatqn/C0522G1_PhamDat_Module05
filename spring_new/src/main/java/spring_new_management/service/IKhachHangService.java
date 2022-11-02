package spring_new_management.service;

import spring_new_management.model.KhachHang;

import java.util.List;
import java.util.Optional;

public interface IKhachHangService {
    List<KhachHang> findAll();
    Optional<KhachHang> findById(int id);
}
