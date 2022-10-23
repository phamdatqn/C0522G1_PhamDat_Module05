import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('THÊM MỚI DỊCH VỤ');
  }

  ngOnInit(): void {
  }

}
