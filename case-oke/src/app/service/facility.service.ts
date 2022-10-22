import { Injectable } from '@angular/core';
import {Facility} from '../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility [] = [
    {
      id: 1,
      name: 'Villa Beach Front',
      area: 1000,
      rentalCosts: 1000000,
      maxPerson: 10,
      isDelete: false,
      rentType: 1,
      facilityType: 1,
      description: 'Có hồ bơi',
      room: 'Vip',
      floor: 5,
      areaPool: 200,
      free: ''
    }, {
      id: 2,
      name: 'House Princess',
      area: 1000,
      rentalCosts: 1000000,
      maxPerson: 10,
      isDelete: false,
      rentType: 2,
      facilityType: 2,
      description: 'Có hồ bơi',
      room: 'Vip',
      floor: 5,
      areaPool: 200,
      free: ''
    }, {
      id: 3,
      name: 'Room Princess',
      area: 1000,
      rentalCosts: 1000000,
      maxPerson: 10,
      isDelete: false,
      rentType: 3,
      facilityType: 3,
      description: 'Có hồ bơi',
      room: 'Vip',
      floor: 5,
      areaPool: 200,
      free: ''
    }, {
      id: 4,
      name: 'Villa Princess',
      area: 1000,
      rentalCosts: 1000000,
      maxPerson: 10,
      isDelete: false,
      rentType: 3,
      facilityType: 3,
      description: 'Có hồ bơi',
      room: 'Vip',
      floor: 5,
      areaPool: 200,
      free: ''
    }, {
      id: 5,
      name: 'Villa Beach Front',
      area: 1000,
      rentalCosts: 1000000,
      maxPerson: 10,
      isDelete: false,
      rentType: 1,
      facilityType: 1,
      description: 'Có hồ bơi',
      room: 'Vip',
      floor: 5,
      areaPool: 200,
      free: ''
    }, {
      id: 6,
      name: 'House Princess',
      area: 1000,
      rentalCosts: 1000000,
      maxPerson: 10,
      isDelete: false,
      rentType: 2,
      facilityType: 2,
      description: 'Có hồ bơi',
      room: 'Vip',
      floor: 5,
      areaPool: 200,
      free: ''
    }, {
      id: 7,
      name: 'Room Princess',
      area: 1000,
      rentalCosts: 1000000,
      maxPerson: 10,
      isDelete: false,
      rentType: 3,
      facilityType: 3,
      description: 'Có hồ bơi',
      room: 'Vip',
      floor: 5,
      areaPool: 200,
      free: ''
    }, {
      id: 8,
      name: 'Villa Princess',
      area: 1000,
      rentalCosts: 1000000,
      maxPerson: 10,
      isDelete: false,
      rentType: 3,
      facilityType: 3,
      description: 'Có hồ bơi',
      room: 'Vip',
      floor: 5,
      areaPool: 200,
      free: ''
    },
  ];

  constructor() { }

  getAll(): Facility[] {
    return this.facilityList;
  }
}
