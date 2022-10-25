import {Injectable} from '@angular/core';
import {Contract} from '../model/contract';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private API_CONTRACT_LIST_URL = 'http://localhost:3000/contractList';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.API_CONTRACT_LIST_URL);
  }

  findById(id: number): Observable<Contract> {
    return this.httpClient.get<Contract>(this.API_CONTRACT_LIST_URL + '/' + id);
  }

  saveUpdate(value: Customer): Observable<void> {
    return this.httpClient.patch<void>(this.API_CONTRACT_LIST_URL + '/' + value.id, value);
  }

  deleteContract(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_CONTRACT_LIST_URL + '/' + id);
  }

  saveCreate(value: Customer): Observable<void> {
    return this.httpClient.post<void>(this.API_CONTRACT_LIST_URL, value);
  }
}
