import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../service/facility.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilityList =  this.facilityService.getAll().slice(0, 3);
  curPage = 1;
  totalPage = Math.ceil(this.facilityService.getAll().length / 3);
  facilityNameDelete: string;
  facilityImageDelete: string;
  facilityIdDelete: number;


  constructor(private facilityService: FacilityService,
              private title: Title) {
    this.title.setTitle('DANH SÁCH DỊCH VỤ');
  }

  ngOnInit(): void {
  }
  next(): void {
    this.curPage++;
    this.facilityList = this.facilityService.getAll().slice((this.curPage - 1) * 3, this.curPage * 3);
  }

  previous(): void {
    this.curPage--;
    this.facilityList = this.facilityService.getAll().slice((this.curPage - 1) * 3, this.curPage * 3);
  }

  getInfoFacilityDelete(img: string, name: string, facilityId: number): void {
    this.facilityImageDelete = img;
    this.facilityNameDelete = name;
    this.facilityIdDelete = facilityId;
  }

  deleteFacility(): void {
    this.facilityService.deleteFacility(this.facilityIdDelete);
    this.totalPage = Math.ceil(this.facilityService.getAll().length / 3);
    this.facilityList = this.facilityService.getAll().slice((this.curPage - 1) * 3, this.curPage * 3);
    alert('Xóa dịch vụ  [' + this.facilityNameDelete + ']  thành công!');
  }
}
