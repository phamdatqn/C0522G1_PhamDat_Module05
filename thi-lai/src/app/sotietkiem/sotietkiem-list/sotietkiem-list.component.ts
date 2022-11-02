import { Component, OnInit } from '@angular/core';
import {Sotietkiem} from '../../model/sotietkiem';
import {SotietkiemService} from '../../service/sotietkiem.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-sotietkiem-list',
  templateUrl: './sotietkiem-list.component.html',
  styleUrls: ['./sotietkiem-list.component.css']
})
export class SotietkiemListComponent implements OnInit {
  searchFormGroup: FormGroup = new FormGroup({
    maSo: new FormControl(''),
    name: new FormControl('')
  });
  sotietkiemList: Sotietkiem[];
  curPage = 1;
  totalPage$: number;
  sotietkiemNameDelete: string;
  sotietkiemIdDelete: number;

  getAllPage(search) {
    this.sotietkiemService.getAll(search).subscribe(value => {
      console.log(value);
      this.totalPage$ = value.pageable.totalPages;
      this.sotietkiemList = value.content;
    });
  }

  constructor(private sotietkiemService: SotietkiemService,
              private title: Title) {
    this.title.setTitle('DANH SÁCH SỔ');
  }

  ngOnInit(): void {
    // this.getAllPage('', 0, 3);
    this.getAllPage('');
  }

  next(): void {
    this.curPage++;
    this.getAllPage('');
    // this.getAllPage('', (this.curPage - 1) * 3, this.curPage * 3);

    this.sotietkiemList = this.sotietkiemList.slice((this.curPage - 1) * 3, this.curPage * 3);
  }

  previous(): void {
    this.curPage--;
    this.getAllPage('');
    // this.getAllPage('', (this.curPage - 1) * 3, this.curPage * 3);
  }

  getInfoSotietkiemDelete(id: number, name: string): void {
    this.sotietkiemIdDelete = id;
    this.sotietkiemNameDelete = name;
  }

  deleteSotietkiem(): void {
    this.sotietkiemService.delete(this.sotietkiemIdDelete).subscribe();
    // @ts-ignore
    Swal.fire({
      position: 'top-mid',
      icon: 'success',
      title: 'Đã xóa thành công !',
      showConfirmButton: false,
      timer: 1500
    });
    this.curPage = 1;
    this.getAllPage('');
  }

  timMaSo() {
    const search = this.searchFormGroup.value.maSo;
    console.log(search);
    // @ts-ignore
    Swal.fire({
      position: 'top-mid',
      icon: 'info',
      title: 'Vui lòng đợi, đang load dữ liệu !',
      showConfirmButton: false,
      timer: 1500
    });
    this.curPage = 1;
    this.getAllPage(search);
  }

  timTen() {
    const search = this.searchFormGroup.value.name;
    console.log(search);
    // @ts-ignore
    Swal.fire({
      position: 'top-mid',
      icon: 'info',
      title: 'Vui lòng đợi, đang load dữ liệu !',
      showConfirmButton: false,
      timer: 1500
    });
    this.curPage = 1;
    this.sotietkiemService.getAllByName(search).subscribe(value => {
      this.sotietkiemList = value;
    });
  }
}
