package spring_new_management.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class KhachHang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;

    @OneToMany(mappedBy = "khachHang")
    @JsonManagedReference
    private Set<SoTietKiem> soTietKiems;

    public KhachHang() {
    }

    public KhachHang(int id, String name, Set<SoTietKiem> soTietKiemSet) {
        this.id = id;
        this.name = name;
        this.soTietKiems = soTietKiemSet;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<SoTietKiem> getDanhSachSoSet() {
        return soTietKiems;
    }

    public void setDanhSachSoSet(Set<SoTietKiem> soTietKiemSet) {
        this.soTietKiems = soTietKiemSet;
    }


}
