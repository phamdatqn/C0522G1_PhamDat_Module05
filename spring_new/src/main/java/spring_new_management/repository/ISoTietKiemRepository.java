package spring_new_management.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import spring_new_management.Dto.ISoTietKiemDto;
import spring_new_management.model.SoTietKiem;


public interface ISoTietKiemRepository extends JpaRepository<SoTietKiem, Integer> {
    @Query(value = "select * from so_tiet_kiem", nativeQuery = true)
    Page<SoTietKiem> findByIdSoTietKiem(@Param("idSearch") int idSearch, Pageable pageable);

    @Query(value = "select kh.name as name,kh.id as maKhachHang, st.id as id, st.ky_han as kyHan, lai_xuat as laiXuat, " +
            "thoi_gian_ky_gui as thoiGianKyGui, ngay_mo_so as ngayMoSo, so_tien as soTien, uu_dai as uuDai " +
            "from  khach_hang kh join So_Tiet_Kiem st on kh.id = st.ma_khach_hang" +
            " where kh.name like %:searchName or st.id = :id ",
            countQuery = "select count(*) from  Khach_Hang kh join So_Tiet_Kiem st on kh.id = st.ma_khach_hang " +
                    "            where kh.name like %:searchName or st.id = :id ",
            nativeQuery = true)
    Page<ISoTietKiemDto> searchAll(@Param("searchName") String searchName, @Param("id") int id, Pageable pageable);

    @Query(value = "select kh.name as name,kh.id as maKhachHang, st.id as id, st.ky_han as kyHan, lai_xuat as laiXuat, " +
            "thoi_gian_ky_gui as thoiGianKyGui, ngay_mo_so as ngayMoSo, so_tien as soTien, uu_dai as uuDai " +
            "from  khach_hang kh join So_Tiet_Kiem st on kh.id = st.ma_khach_hang" +
            " where st.id = :id ",
            nativeQuery = true)
    ISoTietKiemDto searchById( @Param("id") int id);
}
