import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.baseUrl + 'categoryList');
  }
  delete(id: number): Observable<Category> {
    return this.httpClient.delete<Category>(this.baseUrl + 'categoryList/' + id);
  }

  save(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.baseUrl + 'categoryList', category);
  }

  findById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(this.baseUrl + 'categoryList/' + id);
  }
  updateCategory(id: number, category: Category): Observable<Category> {
    return this.httpClient.patch<Category>(this.baseUrl + 'categoryList/' + id , category);
  }

}
