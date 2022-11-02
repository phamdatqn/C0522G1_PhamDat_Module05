import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sotietkiem} from '../model/sotietkiem';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SotietkiemService {
  private API_URL_SOTIETKIEM_LIST = 'http://localhost:3000/danhSachSo';

  constructor(private httpClient: HttpClient) {
  }

  getAll(search: number): Observable<Sotietkiem[]> {
    return this.httpClient.get<Sotietkiem[]>(this.API_URL_SOTIETKIEM_LIST  + '?id_like=' + search);
  }

  findById(id: number): Observable<Sotietkiem> {
    return this.httpClient.get<Sotietkiem>(this.API_URL_SOTIETKIEM_LIST + '/' + id);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL_SOTIETKIEM_LIST + '/' + id);
  }

  saveUpdate(value: Sotietkiem): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL_SOTIETKIEM_LIST + '/' + value.id, value);
  }

}
