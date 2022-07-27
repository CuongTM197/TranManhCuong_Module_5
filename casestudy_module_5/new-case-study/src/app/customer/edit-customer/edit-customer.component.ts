import { Component, OnInit } from '@angular/core';
import {Icustomer} from '../icustomer';
import {ServiceService} from '../../service.service';
import {ItypeCustomer} from '../itype-customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerEdit: Icustomer = {
    id: 0,
    code: '',
    fullName: '',
    birthDay: '',
    gender: 0,
    idCard: '',
    phone: '',
    email: '',
    address: '',
    typeCustomer: {
      id: 1,
      nameType: 'Platinum'
    }
  };
  customerType: ItypeCustomer[] = [];
  customerForm: FormGroup;
  constructor(private service: ServiceService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getType();
    this.getById(this.activatedRoute.snapshot.params.id);
    this.customerForm = new FormGroup({
      code: new FormControl(this.customerEdit.code, [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
      fullName: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
      birthDay: new FormControl(this.customerEdit.birthDay, [Validators.required]),
      gender: new FormControl(this.customerEdit.gender, [Validators.required]),
      idCard: new FormControl(this.customerEdit.idCard, [Validators.required, Validators.pattern('^([0-9]{9}|[0-9]{12})$')]),
      // tslint:disable-next-line:max-line-length
      phone: new FormControl(this.customerEdit.phone, [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$')]),
      email: new FormControl(this.customerEdit.email, [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      address: new FormControl(this.customerEdit.address, [Validators.required]),
      typeCustomer: new FormControl(this.customerEdit.typeCustomer.nameType)
    });
  }


  getType() {
    this.service.getCustomerType().subscribe(value => {
      this.customerType = value;
    });
  }

  updateCustomer(customer: Icustomer) {
    this.customerEdit = customer;
  }
  // @ts-ignore
  getById(id: number) {
    this.service.findById(id).subscribe(value => {
      this.customerEdit = value;
    });
  }
}
