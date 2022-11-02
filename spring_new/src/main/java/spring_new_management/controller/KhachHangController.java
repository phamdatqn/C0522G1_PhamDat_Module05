package spring_new_management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import spring_new_management.model.KhachHang;
import spring_new_management.service.IKhachHangService;

import java.util.List;

@RestController
@RequestMapping("/KhachHang")
public class KhachHangController {

    @Autowired
    private IKhachHangService iKhachHangService;

    @GetMapping
    public ResponseEntity<List<KhachHang>> home() {
        List<KhachHang> khachHangList = iKhachHangService.findAll();
        if (khachHangList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(khachHangList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<KhachHang> findById(@PathVariable int id) {
        KhachHang khachHang = iKhachHangService.findById(id).orElse(null);
        if (khachHang == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(khachHang, HttpStatus.OK);
    }
}
