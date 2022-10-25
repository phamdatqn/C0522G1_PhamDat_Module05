import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ContractService} from '../../service/contract.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';
import {Contract} from '../../model/contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[];
  curPage = 1;
  totalPage: number;
  customerIdDelete: number;
  contractIdDelete: number;
  customerList: string[] = ['Đạt Phạm', 'Phạm Đạt', 'Đẹt Phạm', 'Phạm Đẹt'];
  employeeList: string[] = ['NV Đạt Phạm', 'NV Phạm Đạt', 'NV Đẹt Phạm', 'NV Phạm Đẹt'];
  facilityTypeList: string[] = ['Villa VIP', 'House Vip', 'Room Vip', 'Villa House', 'Villa Room'];
  createContractFormGroup: FormGroup = new FormGroup(
    {
      id: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      deposit: new FormControl('', Validators.pattern('^[1-9]\\d*$')),
      totalMoney: new FormControl('', Validators.required),
      employeeId: new FormControl('', Validators.required),
      customerId: new FormControl('', Validators.required),
      facilityId: new FormControl('', Validators.required),
      contractDetailsId: new FormControl('', Validators.required),
    }
  );
  getAllPage(n1, n2) {
    this.contractService.getAll().subscribe(value => {
      this.totalPage = Math.ceil(value.length / 3);
      this.contractList = value.slice(n1, n2);
    });
  }

  constructor(private title: Title,
              private contractService: ContractService) {
    this.title.setTitle('DANH SÁCH HỢP ĐỒNG');
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

  getInfoContractDelete(id: number, customerIdDelete: number): void {
    this.contractIdDelete = id;
    this.customerIdDelete = customerIdDelete;
  }

  deleteContract(): void {
    this.contractService.deleteContract(this.customerIdDelete).subscribe();
    alert('Xóa khách hàng:  [' + this.customerIdDelete + ']  thành công!');
    this.curPage = 1;
    this.getAllPage(0, 3);
  }
}
