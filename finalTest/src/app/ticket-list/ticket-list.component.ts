import {Component, OnInit} from '@angular/core';
import {Ticket} from '../model/ticket';
import {HouseCar} from '../model/house-car';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {TicketService} from '../service/ticket.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  ticketAddNew: Ticket;
  houseCarObj: HouseCar[] = [];
  ticketForm = new FormGroup(
    {
      start: new FormControl('', [Validators.required]),
      end: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      startDay: new FormControl(''),
      startTime: new FormControl(''),
      houseCar: new FormGroup(
        {
          id: new FormControl(''),
          name: new FormControl('')
        }
      ),
      count: new FormControl('', this.checkNumber)
    }
  );
  ticketCut: Ticket = {
    id: 0,
    start: '',
    end: '',
    price: 0,
    startDay: '',
    startTime: '',
    houseCar: {
      id: 1,
      name: 'Phương Trang',
    },
    count: 0
  };

  constructor(private ticketService: TicketService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getHouseCar();
  }


  getAll() {
    this.ticketService.getAllTicket().subscribe(value => {
      this.tickets = value;
      console.log(this.tickets);
    });
    // this.toastr.success('Hello World !', 'Hi!');

  }

  addNew() {
    this.ticketAddNew = this.ticketForm.value;
    for (const values of this.houseCarObj) {
      if (this.ticketAddNew.houseCar.id == values.id) {
        this.ticketAddNew.houseCar.name = values.name;
        break;
      }
    }
    this.ticketService.save(this.ticketAddNew).subscribe(res => {
      },
      error => {
      },
      () => {
        this.getAll();
        this.ticketForm.reset();
      }
    );
    this.toastr.success('Add ticket successfully!', 'Hi!');
  }

  getHouseCar() {
    this.ticketService.getHouseCar().subscribe(value => {
      this.houseCarObj = value;
    });
  }

  getListFromSearch(value: any) {
    this.tickets = value;
    // tslint:disable-next-line:triple-equals
    if (value.length == 0) {
      // this.toastr.error('Not for Found ', 'Search!');
    }
  }

  getTicket(ticket: Ticket) {
    this.ticketCut = ticket;
  }

  orderTicket(ticket: Ticket) {
    if (ticket.count > 0) {
      ticket.count = ticket.count - 1;
      this.ticketService.orderTicket(ticket).subscribe(res => {
        this.toastr.success('Đặt vé thành công', 'Chúc Mừng!');
        this.getAll();
      });
    } else {
      this.toastr.error('Đã hết vé!', 'Hẹn Gặp Lại !');
    }
  }

  checkNumber(abstractControl: AbstractControl): any {
    return abstractControl.value.price > 0 ? null : {err: true};
  }


}
