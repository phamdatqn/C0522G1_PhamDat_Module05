import { Injectable } from '@angular/core';
import {Customer} from '../model/customer';
import {Contract} from '../model/contract';
import {Facility} from '../model/facility';

@Injectable({
  providedIn: 'root'
})
export class CustomerService  {
  customerList: Customer[] = [
    {
      id: 1,
      name: 'Đạt Phạm',
      dateOfBirth: '2020-12-12',
      gender: true,
      idCard: '123456789',
      phoneNumber: '097111111',
      email: 'phamdat.qn@gmail.com',
      address: 'Đà Nẵng',
      customerType: 'Gold'
    },
    {
      id: 2,
      name: 'Đạt Phạm 2',
      dateOfBirth: '2020-12-12',
      gender: true,
      idCard: '123456789',
      phoneNumber: '097111111',
      email: 'phamdat.qn@gmail.com',
      address: 'Đà Nẵng',
      customerType: 'Gold'
    },
    {
      id: 3,
      name: 'Đạt Phạm 3',
      dateOfBirth: '2020-12-12',
      gender: true,
      idCard: '123456789',
      phoneNumber: '097111111',
      email: 'phamdat.qn@gmail.com',
      address: 'Đà Nẵng',
      customerType: 'Gold'
    },
    {
      id: 4,
      name: 'Đạt Phạm 4',
      dateOfBirth: '2020-12-12',
      gender: true,
      idCard: '123456789',
      phoneNumber: '097111111',
      email: 'phamdat.qn@gmail.com',
      address: 'Đà Nẵng',
      customerType: 'Gold'
    },
    {
      id: 5,
      name: 'Đạt Phạm 5',
      dateOfBirth: '2020-12-12',
      gender: true,
      idCard: '123456789',
      phoneNumber: '097111111',
      email: 'phamdat.qn@gmail.com',
      address: 'Đà Nẵng',
      customerType: 'Gold'
    },
    {
      id: 6,
      name: 'Đạt Phạm 6',
      dateOfBirth: '2020-12-12',
      gender: true,
      idCard: '123456789',
      phoneNumber: '097111111',
      email: 'phamdat.qn@gmail.com',
      address: 'Đà Nẵng',
      customerType: 'Gold'
    },
  ];
  constructor() {
  }
  getAll(): Customer[] {
    return this.customerList;
  }

  findById(id: number): Customer {
    return  this.customerList.find(item => item.id === id);
  }

  deleteCustomer(id: number): void {
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].id === id) {
        this.customerList.splice(i, 1);
        break;
      }
    }
  }

}

