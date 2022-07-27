import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Class} from "./class";
import {Student} from "./student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }
  getAllStudent(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseUrl + 'studentList');
  }

  delete(id: number): Observable<Student> {
    return this.httpClient.delete<Student>(this.baseUrl + 'studentList/' + id);
  }

  save(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.baseUrl + 'studentList', student);
  }

  getClass(): Observable<Class[]> {
    return this.httpClient.get<Class[]>(this.baseUrl + 'classList');
  }

  findById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(this.baseUrl + 'studentList/' + id);
  }
  updateStudent(id: number, student: Student): Observable<Student>{
    return this.httpClient.patch<Student>(this.baseUrl + 'studentList/'+ id , student);
  }

  search(keyWork: string): Observable<Student[]> {
    return  this.httpClient.get<Student[]>(this.baseUrl + 'studentList?name_like=' + keyWork);
  }
}
