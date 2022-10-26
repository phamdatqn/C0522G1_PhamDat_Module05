import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_URL_CATEGORY_LIST = 'http://localhost:3000/categoryList';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API_URL_CATEGORY_LIST);
  }
  findById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(this.API_URL_CATEGORY_LIST + '/' + id);
  }

  deleteCategory(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL_CATEGORY_LIST + '/' + id);
  }

  saveUpdate(value: Category): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL_CATEGORY_LIST + '/' + value.id, value);
  }

  saveCreate(value: Category): Observable<void> {
    return this.httpClient.post<void>(this.API_URL_CATEGORY_LIST, value);
  }
}
