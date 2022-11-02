import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../../service/facility.service';
import {Title} from '@angular/platform-browser';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilityList: Facility[];
  curPage = 1;
  totalPage: number;
  facilityNameDelete: string;
  facilityImageDelete: string;
  facilityIdDelete: number;

  getAllPage(n1, n2) {
    this.facilityService.getAll().subscribe(value => {
      this.totalPage = Math.ceil(value.length / 3);
      this.facilityList = value.slice(n1, n2);
    });
  }

  constructor(private facilityService: FacilityService,
              private title: Title) {
    this.title.setTitle('DANH SÁCH DỊCH VỤ');
  }

  ngOnInit(): void {
    this.getAllPage(0, 3);
  }

  next(): void {
    this.curPage++;
    this.getAllPage((this.curPage - 1) * 3, this.curPage * 3);

    this.facilityList = this.facilityList.slice((this.curPage - 1) * 3, this.curPage * 3);
  }

  previous(): void {
    this.curPage--;
    this.getAllPage((this.curPage - 1) * 3, this.curPage * 3);
  }

  getInfoFacilityDelete(id: number, name: string, img: string): void {
    this.facilityIdDelete = id;
    this.facilityNameDelete = name;
    this.facilityImageDelete = img;
  }

  deleteFacility(): void {
    this.facilityService.deleteFacility(this.facilityIdDelete).subscribe();
    // @ts-ignore
    Swal.fire({
      position: 'top-mid',
      icon: 'success',
      title: 'Đã xóa thành công !',
      showConfirmButton: false,
      timer: 1500
    });
    this.curPage = 1;
    this.getAllPage(0, 3);
  }
}
