import { Injectable } from '@angular/core';
import {Facility} from '../model/facility';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility [] = [
    {
      id: 1,
      name: 'Villa Beach Front',
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg',
      area: 1000,
      rentalCosts: 1000000,
      maxPeople: 10,
      isDelete: false,
      rentType: 1,
      facilityType: 'Villa',
      description: 'Có hồ bơi',
      room: 'Vip',
      floor: 5,
      areaPool: 200,
      free: ''
    }, {
      id: 2,
      name: 'House Princess',
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg',
      area: 1000,
      rentalCosts: 1000000,
      maxPeople: 10,
      isDelete: false,
      rentType: 2,
      facilityType: 'House',
      description: 'Có hồ bơi',
      room: 'Vip',
      floor: 5,
      areaPool: 200,
      free: ''
    }, {
      id: 3,
      name: 'Room Princess',
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg',
      area: 1000,
      rentalCosts: 1000000,
      maxPeople: 10,
      isDelete: false,
      rentType: 3,
      facilityType: 'Room',
      description: 'Có hồ bơi',
      room: 'Vip',
      floor: 5,
      areaPool: 200,
      free: ''
    }, {
      id: 4,
      name: 'Villa Princess',
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg',
      area: 1000,
      rentalCosts: 1000000,
      maxPeople: 10,
      isDelete: false,
      rentType: 3,
      facilityType: 'Villa',
      description: 'Có hồ bơi',
      room: 'Vip',
      floor: 5,
      areaPool: 200,
      free: ''
    }, {
      id: 5,
      name: 'Villa Beach Front',
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg',
      area: 1000,
      rentalCosts: 1000000,
      maxPeople: 10,
      isDelete: false,
      rentType: 1,
      facilityType: 'House',
      description: 'Có hồ bơi',
      room: 'Vip',
      floor: 5,
      areaPool: 200,
      free: ''
    }, {
      id: 6,
      name: 'House Princess',
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg',
      area: 1000,
      rentalCosts: 1000000,
      maxPeople: 10,
      isDelete: false,
      rentType: 2,
      facilityType: 'Room',
      description: 'Có hồ bơi',
      room: 'Vip',
      floor: 5,
      areaPool: 200,
      free: ''
    }, {
      id: 7,
      name: 'Room Princess',
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg',
      area: 1000,
      rentalCosts: 1000000,
      maxPeople: 10,
      isDelete: false,
      rentType: 3,
      facilityType: 'Villa',
      description: 'Có hồ bơi',
      room: 'Vip',
      floor: 5,
      areaPool: 200,
      free: ''
    }, {
      id: 8,
      name: 'Villa Princess',
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg',
      area: 1000,
      rentalCosts: 1000000,
      maxPeople: 10,
      isDelete: false,
      rentType: 3,
      facilityType: 'House',
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

  findById(id: number): Facility {
    return  this.facilityList.find(item => item.id === id);
  }

  deleteFacility(id: number): void {
    for (let i = 0; i < this.facilityList.length; i++) {
      if (this.facilityList[i].id === id) {
        this.facilityList.splice(i, 1);
        break;
      }
    }
  }
}
