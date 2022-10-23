import { Injectable } from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService  {
  customerList = [];
  constructor() {
    this.customerList.push(new Customer(1, 'Phạm Đạt', '2022-12-12', 1,
      '123456789', '097111111', 'phamdat.qn@gmail.com', 'Đà Nẵng', 'Diamond'));

    this.customerList.push(new Customer(2, 'ĐẠt Phạm', '2022-12-12', 1,
      '123456789', '097111111', 'phamdat.qn@gmail.com', 'Đà Nẵng', 'Diamond'));

    this.customerList.push(new Customer(3, 'Phạm Đẹt', '2022-12-12', 0,
      '123456789', '097111111', 'phamdat.qn@gmail.com', 'Quảng Nhãi', 'Diamond'));

    this.customerList.push(new Customer(4, 'Đẹt Phạm 5', '2022-12-12', 1,
      '123456789', '097111111', 'phamdat.qn@gmail.com', 'Đà Nẵng', 'Diamond'));
    this.customerList.push(new Customer(5, 'Phạm Đạt', '2022-12-12', 1,
      '123456789', '097111111', 'phamdat.qn@gmail.com', 'Đà Nẵng', 'Diamond'));

    this.customerList.push(new Customer(6, 'ĐẠt Phạm 3', '2022-12-12', 1,
      '123456789', '097111111', 'phamdat.qn@gmail.com', 'Đà Nẵng', 'Diamond'));

    this.customerList.push(new Customer(7, 'Phạm Đẹt 1', '2022-12-12', 0,
      '123456789', '097111111', 'phamdat.qn@gmail.com', 'Quảng Nhãi', 'Diamond'));

    this.customerList.push(new Customer(8, 'Đẹt Phạm 2', '2022-12-12', 1,
      '123456789', '097111111', 'phamdat.qn@gmail.com', 'Đà Nẵng', 'Diamond'));
  }

  findById(id: number): Customer {
    return  this.customerList.find(item => item.id === id);
  }
}

