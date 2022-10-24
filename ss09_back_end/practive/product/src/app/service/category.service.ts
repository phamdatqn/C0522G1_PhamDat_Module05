import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_URL_CATEGORY_LIST = 'http://localhost:3000/categoryList';
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL_CATEGORY_LIST);
  }
}
