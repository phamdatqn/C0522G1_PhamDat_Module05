import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../service/customer.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList = this.customerService.getAll().slice(0, 3);
  curPage = 1;
  totalPage = Math.ceil(this.customerService.getAll().length / 3);
  customerNameDelete: string;
  customerIdDelete: number;

  constructor(private customerService: CustomerService,
              private title: Title) {
    this.title.setTitle('DANH SÁCH KHÁCH HÀNG');
  }

  ngOnInit(): void {
  }
  next(): void {
    this.curPage++;
    this.customerList = this.customerService.getAll().slice((this.curPage - 1) * 3, this.curPage * 3);
  }

  previous(): void {
    this.curPage--;
    this.customerList = this.customerService.getAll().slice((this.curPage - 1) * 3, this.curPage * 3);
  }

  getInfoCustomerDelete(id: number, name: string): void {
    this.customerIdDelete = id;
    this.customerNameDelete = name;
  }

  deleteCustomer(): void {
    this.customerService.deleteCustomer(this.customerIdDelete);
    this.totalPage = Math.ceil(this.customerService.getAll().length / 3);
    this.customerList = this.customerService.getAll().slice((this.curPage - 1) * 3, this.curPage * 3);
    alert('Xóa khách hàng:  [' + this.customerNameDelete + ']  thành công!');
  }
}
