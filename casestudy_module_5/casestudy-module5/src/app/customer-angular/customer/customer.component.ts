import { Component, OnInit } from '@angular/core';
import {Icustomer} from "./icustomer";
import {FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() {
    // this.customerForm = new FormGroup(
    //   {
    //     code: new FormControl('', [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
    //     fullName: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
    //     birthday: new FormControl('', [Validators.required]),
    //     gender: new FormControl('', [Validators.required]),
    //     idCard: new FormControl('', [Validators.required, Validators.pattern('^([0-9]{9}|[0-9]{12})$')]),
    //     phone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$')]),
    //     email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
    //     address: new FormControl('', [Validators.required]),
    //     typeCustomer: new FormControl('', [Validators.required])
    //   });
  }
  customer : Icustomer[] = [
    {
      code: 'KH-0001',
      fullName:'Tran Manh Cuong',
      birthDay:'1997-01-28',
      gender:1,
      idCard:'6636362333',
      phone:'0986787878',
      email:'cuong@gmail.com',
      address:'Quảng Bình',
      typeCustomer:'diamond'},
    {
      code: 'KH-0002',
      fullName: "Trần Thị Tuyết",
      birthDay: "2000-02-10",
      gender: 0,
      idCard: "4322323232",
      phone: "0989898988",
      email: "tuyet@gmail.com",
      address: "Quảng Nam",
      typeCustomer: "God"},
    {
      code: 'KH-0003',
      fullName: "Nguyễn Hà Phương",
      birthDay: "1996-09-05",
      gender: 1,
      idCard: "74434344534",
      phone: "0978797666",
      email: "phuong@gmail.com",
      address: "Hà Nội",
      typeCustomer: "Platinium"},
    {
      code: 'KH-0004',
      fullName: "Mai Thế Hùng",
      birthDay: "1997-03-30",
      gender: 1,
      idCard: "3232321212",
      phone: "0989888877",
      email: "hung@gmail.com",
      address: "Thanh Hoá",
      typeCustomer: "Silver"}
  ]
  ngOnInit(): void {


  }

}
