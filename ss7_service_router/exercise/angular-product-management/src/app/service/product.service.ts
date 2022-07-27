import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl + 'productList');
  }
  delete(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.baseUrl + 'productList/' + id);
  }

  save(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl + 'productList', product);
  }

  getCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.baseUrl + 'categoryList');
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.baseUrl + 'productList/' + id);
  }
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.patch<Product>(this.baseUrl + 'productList/' + id , product);
  }


}
