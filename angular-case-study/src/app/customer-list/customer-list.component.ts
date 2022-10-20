import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList = [];

  constructor() { }

  ngOnInit(): void {
    // tslint:disable-next-line:max-line-length
    this.customerList.push(new Customer(1, 'Phạm Đạt', '2022-12-12', 1, '123456789', '097111111', 'phamdat.qn@gmail.com', 'Đà Nẵng', 'Diamond'));
    // tslint:disable-next-line:max-line-length
    this.customerList.push(new Customer(2, 'ĐẠt Phạm', '2022-12-12', 1, '123456789', '097111111', 'phamdat.qn@gmail.com', 'Đà Nẵng', 'Diamond'));
    // tslint:disable-next-line:max-line-length
    this.customerList.push(new Customer(3, 'Phạm Đẹt', '2022-12-12', 1, '123456789', '097111111', 'phamdat.qn@gmail.com', 'Quảng Nhãi', 'Diamond'));
    // tslint:disable-next-line:max-line-length
    this.customerList.push(new Customer(4, 'Đẹt Phạm', '2022-12-12', 1, '123456789', '097111111', 'phamdat.qn@gmail.com', 'Đà Nẵng', 'Diamond'));
  }

}
