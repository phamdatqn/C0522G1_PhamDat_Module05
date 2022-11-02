package spring_new_management.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import spring_new_management.Dto.ISoTietKiemDto;
import spring_new_management.Dto.SoTietKiemDto;
import spring_new_management.model.SoTietKiem;
import spring_new_management.service.ISoTietKiemService;

@RestController
@RequestMapping("/SoTietKiem")
@CrossOrigin("*")
public class SoTietKiemController {

    @Autowired
    private ISoTietKiemService iSoTietKiemService;

    @GetMapping("")
    public ResponseEntity<Page<ISoTietKiemDto>> home(@RequestParam(defaultValue = "0") int idSeach,@RequestParam(defaultValue = "") String searchName, @PageableDefault(value = 3) Pageable pageable) {
//        Page<SoTietKiem> soTietKiemList = iSoTietKiemService.findByIdSoTietKiem(idSeach, pageable);
        Page<ISoTietKiemDto> soTietKiemList = iSoTietKiemService.searchAll(idSeach,searchName, pageable);
        if (soTietKiemList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(soTietKiemList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ISoTietKiemDto> getInfo(@PathVariable int id) {
        ISoTietKiemDto soTietKiem = iSoTietKiemService.searchById(id);
        if (soTietKiem == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(soTietKiem, HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<SoTietKiem> saveUpdate(@PathVariable int id,@RequestBody SoTietKiemDto soTietKiemDto) {
        SoTietKiem soTietKiem = iSoTietKiemService.findById(id);
        if (soTietKiem == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        BeanUtils.copyProperties(soTietKiemDto,soTietKiem);
        iSoTietKiemService.save(soTietKiem);
        System.out.println(soTietKiem);
        return new ResponseEntity<>(soTietKiem, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable int id) {
        SoTietKiem soTietKiem = iSoTietKiemService.findById(id);
        if (soTietKiem == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        iSoTietKiemService.delete(id);
        return new ResponseEntity<>(soTietKiem, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity create(@RequestBody SoTietKiemDto soTietKiemDto) {
        SoTietKiem soTietKiem = new SoTietKiem();
        System.out.println(soTietKiemDto.getKhachHang().getName());
        BeanUtils.copyProperties(soTietKiemDto, soTietKiem);
        iSoTietKiemService.save(soTietKiem);
        return new ResponseEntity(HttpStatus.OK);
    }


}
