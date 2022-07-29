import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ticket} from '../model/ticket';
import {HouseCar} from '../model/house-car';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private baseUrl = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) {
  }

  getAllTicket(): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(this.baseUrl + 'get-list-ticket');
  }

  save(ticket: Ticket): Observable<Ticket> {
    console.log(ticket);
    return this.httpClient.post<Ticket>(this.baseUrl + 'add-ticket', ticket);
  }

  getHouseCar(): Observable<HouseCar[]> {
    return this.httpClient.get<HouseCar[]>(this.baseUrl + 'get-list-houseCar');
  }

  search(keyWork: string): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(this.baseUrl + 'search-ticket?keyWord=' + keyWork);
  }

  orderTicket(ticket: Ticket): Observable<Ticket> {


    return this.httpClient.put<Ticket>(this.baseUrl + 'order-ticket', ticket);
  }
}
