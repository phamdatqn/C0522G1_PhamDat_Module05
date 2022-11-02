package thi_spring.model;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
public class SoTietKiem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date ngayMoSo;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date thoiGianKyGui;
    private int kyHan;
    private double soTien;
    private int laiXuat;
    private String uuDai;

    @ManyToOne
    @JoinColumn(name = "id", referencedColumnName = "id")
    private KhachHang khachHang;

    public SoTietKiem() {
    }

    public SoTietKiem(int id, Date ngayMoSo, Date thoiGianKyGui, int kyHan, double soTien,
                      int laiXuat, String uuDai, KhachHang khachHang) {
        this.id = id;
        this.ngayMoSo = ngayMoSo;
        this.thoiGianKyGui = thoiGianKyGui;
        this.kyHan = kyHan;
        this.soTien = soTien;
        this.laiXuat = laiXuat;
        this.uuDai = uuDai;
        this.KhachHang = khachHang;
    }

    public KhachHang getKhachHang() {
        return KhachHang;
    }

    public void setKhachHang(KhachHang khachHang) {
        this.KhachHang = khachHang;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getNgayMoSo() {
        return ngayMoSo;
    }

    public void setNgayMoSo(Date ngayMoSo) {
        this.ngayMoSo = ngayMoSo;
    }

    public Date getThoiGianKyGui() {
        return thoiGianKyGui;
    }

    public void setThoiGianKyGui(Date thoiGianKyGui) {
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

}
