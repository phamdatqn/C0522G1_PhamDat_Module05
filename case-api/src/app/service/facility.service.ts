import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private API_FACILITY_LIST_URL = 'http://localhost:3000/facilityList';

  constructor(private  httpClient: HttpClient) {
  }

  getAll(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(this.API_FACILITY_LIST_URL);
  }

  findById(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>(this.API_FACILITY_LIST_URL + '/' + id);
  }

  saveUpdate(value: Facility): Observable<void> {
    return this.httpClient.patch<void>(this.API_FACILITY_LIST_URL + '/' + value.id, value);
  }

  deleteFacility(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_FACILITY_LIST_URL + '/' + id);
  }

  saveCreate(value: Facility): Observable<void> {
    return this.httpClient.post<void>(this.API_FACILITY_LIST_URL, value);
  }
}
