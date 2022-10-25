import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Title} from '@angular/platform-browser';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[];
  curPage = 1;
  totalPage: number;
  customerNameDelete: string;
  customerIdDelete: number;

  getAllPage(n1, n2) {
    this.customerService.getAll().subscribe(value => {
      this.totalPage = Math.ceil(value.length / 3);
      this.customerList = value.slice(n1, n2);
    });
  }

  constructor(private customerService: CustomerService,
              private title: Title) {
    this.title.setTitle('DANH SÁCH KHÁCH HÀNG');
  }

  ngOnInit(): void {
    this.getAllPage(0, 3);
  }

  next(): void {
    this.curPage++;
    this.getAllPage((this.curPage - 1) * 3, this.curPage * 3);

    this.customerList = this.customerList.slice((this.curPage - 1) * 3, this.curPage * 3);
  }

  previous(): void {
    this.curPage--;
    this.getAllPage((this.curPage - 1) * 3, this.curPage * 3);
  }

  getInfoCustomerDelete(id: number, name: string): void {
    this.customerIdDelete = id;
    this.customerNameDelete = name;
  }

  deleteCustomer(): void {
    this.customerService.deleteCustomer(this.customerIdDelete).subscribe();
    alert('Xóa khách hàng:  [' + this.customerNameDelete + ']  thành công!');
    this.curPage = 1;
    this.getAllPage(0, 3);
  }
}
