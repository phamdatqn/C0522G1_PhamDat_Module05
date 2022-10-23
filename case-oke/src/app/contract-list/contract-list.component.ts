import { Component, OnInit } from '@angular/core';
import {Contract} from '../model/contract';
import {Title} from '@angular/platform-browser';
import {ContractService} from '../service/contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList = this.contractService.getAll().slice(0, 3);
  curPage = 1;
  totalPage = Math.ceil(this.contractService.getAll().length / 3);

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
}
