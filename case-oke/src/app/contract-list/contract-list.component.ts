import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ContractService} from '../service/contract.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList = this.contractService.getAll().slice(0, 3);
  curPage = 1;
  totalPage = Math.ceil(this.contractService.getAll().length / 3);
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

  constructor(private title: Title,
              private contractService: ContractService) {
    this.title.setTitle('DANH SÁCH HỢP ĐỒNG');
  }

  ngOnInit(): void {
  }

  next(): void {
    this.curPage++;
    this.contractList = this.contractService.getAll().slice((this.curPage - 1) * 3, this.curPage * 3);
  }

  previous(): void {
    this.curPage--;
    this.contractList = this.contractService.getAll().slice((this.curPage - 1) * 3, this.curPage * 3);
  }

  getInfoContractDelete(id: number, customerId: number) {
    this.contractIdDelete = id;
    this.customerIdDelete = customerId;
  }

  deleteContract(): void {
    this.contractService.deleteContract(this.contractIdDelete);
    this.totalPage = Math.ceil(this.contractService.getAll().length / 3);
    this.contractList = this.contractService.getAll().slice((this.curPage - 1) * 3, this.curPage * 3);
    alert('Xóa khách hàng có mã :  [' + this.customerIdDelete + ']  thành công!');
  }

  giveFormValue() {
    console.log(this.createContractFormGroup.value);
  }
}
