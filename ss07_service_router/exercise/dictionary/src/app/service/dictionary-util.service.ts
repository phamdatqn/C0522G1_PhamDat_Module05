import {Injectable} from '@angular/core';
import {IWord} from '../iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryUtilService {
  dictionaryList: IWord[] = [
    {
      word: 'Apple',
      mean: 'Táo'
    },
    {
      word: 'Banana',
      mean: 'Chuối'
    },
    {
      word: 'Black',
      mean: 'Màu đen'
    }];

  constructor() {
  }

  getAll(): IWord[] {
    return this.dictionaryList;
  }

  findDictionaryByName(name: string) {
    return this.dictionaryList.find(item => item.word === name);
  }
}
