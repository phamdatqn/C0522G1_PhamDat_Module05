package spring_new_management.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
public class SoTietKiem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String ngayMoSo;
    private String thoiGianKyGui;

    private int kyHan;

    private double soTien;
    private int laiXuat;
    private String uuDai;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "ma_khach_hang", referencedColumnName = "id")
    private KhachHang khachHang;

    public SoTietKiem() {
    }

    public SoTietKiem(int id, String ngayMoSo, String thoiGianKyGui, int kyHan, double soTien,
                      int laiXuat, String uuDai, KhachHang khachHang) {
        this.id = id;
        this.ngayMoSo = ngayMoSo;
        this.thoiGianKyGui = thoiGianKyGui;
        this.kyHan = kyHan;
        this.soTien = soTien;
        this.laiXuat = laiXuat;
        this.uuDai = uuDai;
        this.khachHang = khachHang;

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNgayMoSo() {
        return ngayMoSo;
    }

    public void setNgayMoSo(String ngayMoSo) {
        this.ngayMoSo = ngayMoSo;
    }

    public String getThoiGianKyGui() {
        return thoiGianKyGui;
    }

    public void setThoiGianKyGui(String thoiGianKyGui) {
        this.thoiGianKyGui = thoiGianKyGui;
    }

    public int getKyHan() {
        return kyHan;
    }

    public void setKyHan(int kyHan) {
        this.kyHan = kyHan;
    }

    public double getSoTien() {
        return soTien;
    }

    public void setSoTien(double soTien) {
        this.soTien = soTien;
    }

    public int getLaiXuat() {
        return laiXuat;
    }

    public void setLaiXuat(int laiXuat) {
        this.laiXuat = laiXuat;
    }

    public String getUuDai() {
        return uuDai;
    }

    public void setUuDai(String uuDai) {
        this.uuDai = uuDai;
    }

    public KhachHang getKhachHang() {
        return khachHang;
    }

    public void setKhachHang(KhachHang khachHang) {
        this.khachHang = khachHang;
    }
}
