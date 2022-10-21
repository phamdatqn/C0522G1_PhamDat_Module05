import {Component, OnInit} from '@angular/core';
import {DictionaryUtilService} from '../service/dictionary-util.service';
import {ActivatedRoute} from '@angular/router';
import {IWord} from '../iword';

@Component({
  selector: 'app-dictionary-detail-component',
  templateUrl: './dictionary-detail-component.component.html',
  styleUrls: ['./dictionary-detail-component.component.css']
})
export class DictionaryDetailComponentComponent implements OnInit {

  mean: IWord;

  constructor(private dictionaryService: DictionaryUtilService,
              private  activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const name = this.activatedRoute.snapshot.params.keyword;
    this.mean = this.dictionaryService.findDictionaryByName(name);
  }
}
