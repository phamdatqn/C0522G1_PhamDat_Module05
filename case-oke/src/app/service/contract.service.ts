import { Injectable } from '@angular/core';
import {Contract} from '../model/contract';
import {Title} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contractList: Contract[] = [
    {
      id: 1,
      startDate: '2020-12-12',
      endDate: '2020-12-15',
      deposit: 100000,
      totalMoney: 1000000,
      isDelete: false,
      employeeId: 1,
      customerId: 2,
      facilityId: 1,
      contractDetailsId: 1
    },
    {
      id: 2,
      startDate: '2020-12-12',
      endDate: '2020-12-15',
      deposit: 200000,
      totalMoney: 2000000,
      isDelete: false,
      employeeId: 1,
      customerId: 2,
      facilityId: 1,
      contractDetailsId: 1
    },
    {
      id: 3,
      startDate: '2020-12-12',
      endDate: '2020-12-15',
      deposit: 300000,
      totalMoney: 3000000,
      isDelete: false,
      employeeId: 1,
      customerId: 2,
      facilityId: 1,
      contractDetailsId: 1
    },
    {
      id: 4,
      startDate: '2020-12-12',
      endDate: '2020-12-15',
      deposit: 110000,
      totalMoney: 1100000,
      isDelete: false,
      employeeId: 1,
      customerId: 2,
      facilityId: 1,
      contractDetailsId: 1
    },
    {
      id: 5,
      startDate: '2020-12-12',
      endDate: '2020-12-15',
      deposit: 130000,
      totalMoney: 1300000,
      isDelete: false,
      employeeId: 1,
      customerId: 2,
      facilityId: 1,
      contractDetailsId: 1
    },
    {
      id: 5,
      startDate: '2020-12-12',
      endDate: '2020-12-15',
      deposit: 150000,
      totalMoney: 1600000,
      isDelete: false,
      employeeId: 1,
      customerId: 2,
      facilityId: 1,
      contractDetailsId: 1
    },
    {
      id: 6,
      startDate: '2020-12-12',
      endDate: '2020-12-15',
      deposit: 120000,
      totalMoney: 1800000,
      isDelete: false,
      employeeId: 1,
      customerId: 2,
      facilityId: 1,
      contractDetailsId: 1
    },
  ];
  constructor() { }

  getAll(): Contract[] {
    return this.contractList;
  }
}
