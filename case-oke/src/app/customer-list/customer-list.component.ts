import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList = [];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerList = this.customerService.customerList;
  }
}
