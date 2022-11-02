import { Component, OnInit } from '@angular/core';
import {Sotietkiem} from '../../model/sotietkiem';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Khachhang} from '../../model/khachhang';
import {SotietkiemService} from '../../service/sotietkiem.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sotietkiem-capnhat',
  templateUrl: './sotietkiem-capnhat.component.html',
  styleUrls: ['./sotietkiem-capnhat.component.css']
})
export class SotietkiemCapnhatComponent implements OnInit {
  sotietkiem: Sotietkiem;
  updateSotietkiemFormGroup: FormGroup = new FormGroup({
    id: new FormControl(''),
    maKhachHang: new FormControl('', Validators.required),
    ngayMoSo: new FormControl(''),
    thoiGianKyGui: new FormControl('', Validators.required),
    kyHan: new FormControl('', [Validators.required]),
    soTien: new FormControl('', Validators.required),
    laiXuat: new FormControl('', [Validators.required, Validators.email]),
    uuDai: new FormControl('', Validators.required),
  });
  constructor(private sotietkiemService: SotietkiemService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.sotietkiemService.findById(id).subscribe(value => {
      this.sotietkiem = value;
      this.updateSotietkiemFormGroup.patchValue(this.sotietkiem);
    });
  }

  ngOnInit(): void {
  }

  saveUpdate() {
    console.log(this.updateSotietkiemFormGroup.value);
    const sotietkiem: Sotietkiem = this.updateSotietkiemFormGroup.value;
    this.sotietkiemService.saveUpdate(sotietkiem).subscribe();
    this.router.navigateByUrl('/sotietkiem/list');
  }
  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

}
