import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../todo";


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'http://localhost:3000/todoList';
  constructor(private httpClient: HttpClient) { }
  getAllTodo(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.baseUrl);
  }

  save(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.baseUrl, todo);
  }

  update( todo: Todo): Observable<Todo> {
    return this.httpClient.patch<Todo>(`${this.baseUrl}/${todo.id}`, todo);
  }

  delete(id: number): Observable<Todo> {
    return this.httpClient.delete<Todo>(`${this.baseUrl}/${id}`);
  }
}
