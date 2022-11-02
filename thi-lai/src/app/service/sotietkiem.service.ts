import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sotietkiem} from '../model/sotietkiem';
import {Observable} from 'rxjs';
import {SearchResult} from '../model/search-result';
import {ISoTietKiemDto} from '../model/i-so-tiet-kiem-dto';

@Injectable({
  providedIn: 'root'
})
export class SotietkiemService {
  private API_URL_SOTIETKIEM_LIST = 'http://localhost:8080/SoTietKiem';

  constructor(private httpClient: HttpClient) {
  }

  getAll(search: number): Observable<SearchResult<Sotietkiem>> {
    return this.httpClient.get<SearchResult<Sotietkiem>>(this.API_URL_SOTIETKIEM_LIST + '?id=' + search);
  }

  paginate(page: number, limit: number, search: number): Observable<SearchResult<Sotietkiem>> {

    const URL = this.API_URL_SOTIETKIEM_LIST + '?page=' + (page - 1) + '&size=' + limit + '?id=' + search;
    console.log(URL);
    return this.httpClient.get<SearchResult<Sotietkiem>>(URL);
  }

  getAllByName(search: string): Observable<Sotietkiem[]> {
    return this.httpClient.get<Sotietkiem[]>(this.API_URL_SOTIETKIEM_LIST + '?KhachHang.name_like=' + search);
  }

  findById(id: number): Observable<Sotietkiem> {
    return this.httpClient.get<Sotietkiem>(this.API_URL_SOTIETKIEM_LIST + '/' + id);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL_SOTIETKIEM_LIST + '/' + id);
  }

  saveUpdate(value: ISoTietKiemDto): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL_SOTIETKIEM_LIST + '/' + value.id, value);
  }

  saveCreate(value: ISoTietKiemDto) {
    return this.httpClient.post<void>(this.API_URL_SOTIETKIEM_LIST, value);
  }
}
