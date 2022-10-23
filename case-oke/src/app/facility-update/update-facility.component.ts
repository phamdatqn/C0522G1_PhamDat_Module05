import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {Facility} from '../model/facility';
import {FacilityService} from '../service/facility.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-facility',
  templateUrl: './update-facility.component.html',
  styleUrls: ['./update-facility.component.css']
})
export class UpdateFacilityComponent implements OnInit {
  facility: Facility;
  updateFacilityFormGroup: FormGroup;
  constructor(private title: Title,
              private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute) {
    this.title.setTitle('CẬP NHẬT DỊCH VỤ');
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.facility = this.facilityService.findById(id);
    this.updateFacilityFormGroup = new FormGroup({
      id: new FormControl(''),
      img: new FormControl(''),
      name: new FormControl(''),
      area: new FormControl(''),
      rentalCosts: new FormControl(''),
      maxPeople: new FormControl(''),
      isDelete: new FormControl(''),
      rentType: new FormControl(''),
      facilityType: new FormControl(''),
      description: new FormControl(''),
      room: new FormControl(''),
      floor: new FormControl(''),
      areaPool: new FormControl(''),
      free: new FormControl(''),
    });
    this.updateFacilityFormGroup.patchValue(this.facility);
  }

  ngOnInit(): void {
  }

}
