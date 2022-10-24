import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {Facility} from '../model/facility';
import {FacilityService} from '../service/facility.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-facility',
  templateUrl: './update-facility.component.html',
  styleUrls: ['./update-facility.component.css']
})
export class UpdateFacilityComponent implements OnInit {
  facility: Facility;
  updateFacilityFormGroup: FormGroup;
  facilityTypeList: string[] = ['Villa', 'House', 'Room'];
  rentTypeList: string[] = ['Giờ', 'Ngày', 'Tháng', 'Năm'];

  constructor(private title: Title,
              private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute) {
    this.title.setTitle('CẬP NHẬT DỊCH VỤ');
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.facility = this.facilityService.findById(id);
    this.updateFacilityFormGroup = new FormGroup({
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
    this.updateFacilityFormGroup.patchValue(this.facility);
  }

  ngOnInit(): void {
  }

  giveFormValue() {
    console.log(this.updateFacilityFormGroup.value);
  }
  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
