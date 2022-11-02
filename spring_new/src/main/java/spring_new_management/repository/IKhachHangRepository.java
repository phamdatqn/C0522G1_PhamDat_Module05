package spring_new_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import spring_new_management.model.KhachHang;

public interface IKhachHangRepository extends JpaRepository<KhachHang, Integer> {
}
