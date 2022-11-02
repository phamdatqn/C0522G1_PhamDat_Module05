import {Component, OnInit} from '@angular/core';
import {Sotietkiem} from '../../model/sotietkiem';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SotietkiemService} from '../../service/sotietkiem.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ISoTietKiemDto} from '../../model/i-so-tiet-kiem-dto';
import {Khachhang} from '../../model/khachhang';

@Component({
  selector: 'app-sotietkiem-capnhat',
  templateUrl: './sotietkiem-capnhat.component.html',
  styleUrls: ['./sotietkiem-capnhat.component.css']
})
export class SotietkiemCapnhatComponent implements OnInit {
  danhSachKyHan: number[] = [3, 6, 9, 12];
  sotietkiem: Sotietkiem;
  updateSotietkiemFormGroup: FormGroup = new FormGroup({
    id: new FormControl(''),
    khachHang: new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.pattern('^[a-z A-Z]*$'))
    }),

    ngayMoSo: new FormControl(''),
    thoiGianKyGui: new FormControl('', Validators.required),
    kyHan: new FormControl('', [Validators.required]),
    soTien: new FormControl('', Validators.min(10000000)),
    laiXuat: new FormControl('', Validators.required),
    uuDai: new FormControl('', Validators.required),
  });

  constructor(private sotietkiemService: SotietkiemService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.sotietkiemService.findById(id).subscribe(value => {
      this.sotietkiem = value;
      const soTietKiemDto: ISoTietKiemDto = value;
      const khachhang: Khachhang = {id: this.sotietkiem.maKhachHang, name: this.sotietkiem.name};
      soTietKiemDto.khachHang = khachhang;
      console.log(soTietKiemDto);
      this.updateSotietkiemFormGroup.patchValue(soTietKiemDto);
    });
  }

  ngOnInit(): void {
  }

  saveUpdate() {
    // console.log(this.updateSotietkiemFormGroup.value);
    if (!this.updateSotietkiemFormGroup.invalid) {
      const soTietKiemDto: ISoTietKiemDto = this.updateSotietkiemFormGroup.value;

      console.log(soTietKiemDto);
      this.sotietkiemService.saveUpdate(soTietKiemDto).subscribe(value => {
        // @ts-ignore
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cập nhật thành công',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigateByUrl('/sotietkiem/list');
      });
    } else {
      // @ts-ignore
      Swal.fire({
        position: 'center',
        icon: 'warding',
        title: 'Cập nhật thất bại',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  compareWithId(item1: string, item2: string) {
    return item1 && item2 && item1 === item2;
  }
}
