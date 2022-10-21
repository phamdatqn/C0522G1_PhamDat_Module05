import {Component, OnInit} from '@angular/core';
import {DictionaryUtilService} from '../service/dictionary-util.service';
import {IWord} from '../iword';

@Component({
  selector: 'app-dictionary-page-component',
  templateUrl: './dictionary-page-component.component.html',
  styleUrls: ['./dictionary-page-component.component.css']
})
export class DictionaryPageComponentComponent implements OnInit {
  dictionaryList: IWord[];

  constructor(private dictionaryService: DictionaryUtilService) {
  }

  ngOnInit(): void {
    this.dictionaryList = this.dictionaryService.getAll();
  }

}
