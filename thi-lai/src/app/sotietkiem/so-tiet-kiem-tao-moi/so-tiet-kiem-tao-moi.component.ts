import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SotietkiemService} from '../../service/sotietkiem.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ISoTietKiemDto} from '../../model/i-so-tiet-kiem-dto';

@Component({
  selector: 'app-so-tiet-kiem-tao-moi',
  templateUrl: './so-tiet-kiem-tao-moi.component.html',
  styleUrls: ['./so-tiet-kiem-tao-moi.component.css']
})
export class SoTietKiemTaoMoiComponent implements OnInit {
  danhSachKyHan: number[] = [3, 6, 9, 12];
  createSotietkiemFormGroup: FormGroup = new FormGroup({
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
  }

  ngOnInit(): void {
  }

  saveCreate() {
    console.log(this.createSotietkiemFormGroup.value);
    const iSoTietKiemDto: ISoTietKiemDto = this.createSotietkiemFormGroup.value;
    this.sotietkiemService.saveCreate(iSoTietKiemDto).subscribe();
    // @ts-ignore
    Swal.fire({
      position: 'top-mid',
      icon: 'success',
      title: 'Thêm mới thành công !',
      showConfirmButton: false,
      timer: 1500
    });
    this.router.navigateByUrl('sotietkiem/list');
  }

  compareWithId(item1: string, item2: string) {
    return item1 && item2 && item1 === item2;
  }
}
