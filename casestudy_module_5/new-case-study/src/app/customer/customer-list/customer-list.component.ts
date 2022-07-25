import {Component, OnInit} from '@angular/core';
import {Icustomer} from './icustomer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Icustomer[] = [
    {
      code: 'KH-0001',
      fullName: 'Tran Manh Cuong',
      birthDay: '1997-01-28',
      gender: 1,
      idCard: '6636362333',
      phone: '0986787878',
      email: 'cuong@gmail.com',
      address: 'Quảng Bình',
      typeCustomer: 'diamond'
    },
    {
      code: 'KH-0002',
      fullName: 'Trần Thị Tuyết',
      birthDay: '2000-02-10',
      gender: 0,
      idCard: '4322323232',
      phone: '0989898988',
      email: 'tuyet@gmail.com',
      address: 'Quảng Nam',
      typeCustomer: 'God'
    },
    {
      code: 'KH-0003',
      fullName: 'Nguyễn Hà Phương',
      birthDay: '1996-09-05',
      gender: 1,
      idCard: '74434344534',
      phone: '0978797666',
      email: 'phuong@gmail.com',
      address: 'Hà Nội',
      typeCustomer: 'Platinium'
    },
    {
      code: 'KH-0004',
      fullName: 'Mai Thế Hùng',
      birthDay: '1997-03-30',
      gender: 1,
      idCard: '3232321212',
      phone: '0989888877',
      email: 'hung@gmail.com',
      address: 'Thanh Hoá',
      typeCustomer: 'Silver'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
