import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
customerForm: FormGroup;
  constructor() {
    this.customerForm = new FormGroup(
      {code: new FormControl('', [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
        fullName: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
          birthday: new FormControl('', [Validators.required]),
          gender: new FormControl('', [Validators.required]),
          idCard: new FormControl('', [Validators.required, Validators.pattern('^([0-9]{9}|[0-9]{12})$')]),
          phone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$')]),
          email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
          address: new FormControl('', [Validators.required]),
          typeCustomer: new FormControl('', [Validators.required])}
    );
  }

  ngOnInit(): void {
  }

}
