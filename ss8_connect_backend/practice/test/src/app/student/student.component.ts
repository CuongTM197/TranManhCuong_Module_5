import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
studentForm: FormGroup;
  constructor() {
this.studentForm = new FormGroup(
  {
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
    address: new FormControl('', [Validators.required])
  });
  }

  ngOnInit(): void {
  }

}
