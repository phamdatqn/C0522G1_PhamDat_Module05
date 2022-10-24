import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  createFacilityFormGroup: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
    area: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    rentalCosts: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    maxPeople: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    rentType: new FormControl('', Validators.required),
    facilityType: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    standardRoom: new FormControl(''),
    floor: new FormControl(''),
    areaPool: new FormControl(''),
    free: new FormControl('')
  });
  facilityTypeList: string[] = ['Villa', 'House', 'Room'];
  rentTypeList: string[] = ['Giờ', 'Ngày', 'Tháng', 'Năm'];

  constructor(private title: Title) {
    this.title.setTitle('THÊM MỚI DỊCH VỤ');
  }

  ngOnInit(): void {
  }

  giveFormValue() {
    console.log(this.createFacilityFormGroup.value);
  }
}
