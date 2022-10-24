import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL_PRODUCT_LIST = 'http://localhost:3000/productList';
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL_PRODUCT_LIST);
  }

  findById(id: number): Observable<Product> {
    return  this.httpClient.get<Product>(this.API_URL_PRODUCT_LIST + '/' + id);
  }

  // updateProduct(id: number, product: Product): void {
  //   for (let i = 0; i < this.productList.length; i++) {
  //     if (this.productList[i].id === id) {
  //       this.productList[i] = product;
  //     }
  //   }
  // }

  // deleteProduct(id: number): void {
  //   this.productList = this.productList.filter(product => {
  //     return product.id !== id;
  //   });
  // }
  saveUpdate(value: Product): Observable<void> {
  return this.httpClient.patch<void>(this.API_URL_PRODUCT_LIST + '/' + value.id, value);
  }
}
