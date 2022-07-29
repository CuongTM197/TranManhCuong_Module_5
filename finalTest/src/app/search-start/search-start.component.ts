import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TicketService} from '../service/ticket.service';

@Component({
  selector: 'app-search-start',
  templateUrl: './search-start.component.html',
  styleUrls: ['./search-start.component.css']
})
export class SearchStartComponent implements OnInit {

  input = new FormControl();
  @Output() eventEmitter = new EventEmitter();

  constructor(private ticketService: TicketService) {
  }

  ngOnInit(): void {
  }

  searchByName() {
    this.ticketService.search(this.input.value).subscribe(value => {
      this.eventEmitter.emit(value);
    });
    // this.toastr.success('Find students !', 'Hi!');
  }
}
