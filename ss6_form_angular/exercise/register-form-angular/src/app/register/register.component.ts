import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', this.checkAge18),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^\\+84\\d{9,10}$")]),
    }, this.checkPass)

  }

  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  onSubmit() {
    console.log(this.registerForm.value);
  }

  checkAge18(abstractControl: AbstractControl): any {
    const sYear = abstractControl.value.substr(0, 4);
    const curYear = new Date().getFullYear();

    const a = curYear - sYear >= 18 ? null : {not18: true};
    console.log(a)
    return a;
  }

  checkPass(abstractControl: AbstractControl): any {
    return abstractControl.value.password === abstractControl.value.confirmPassword ? null : {errorcheckpassword: true};
  }

}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
