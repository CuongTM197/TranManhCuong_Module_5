import { Component, OnInit } from '@angular/core';
import {Student} from "../student";
import {StudentService} from "../student.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Class} from "../class";
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  studentAddNew: Student
  classObj: Class[] = [];
  studentDelete: Student = {
    id: 0,
    name: '',
    birthDay: '',
    address: '',
    class: {
      id: 1,
      nameClass: 'C0222G1'
    }
  };

  studentForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      birthDay: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      class: new FormControl('')
    }
  )
  constructor(private studentService: StudentService, private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.getAll();
    this.getClass();
  }
  getAll() {
    this.studentService.getAllStudent().subscribe(value => {
      this.students = value;
    });
    this.toastr.success('Hello World !', 'Hi!');

  }

  addNew() {
    this.studentAddNew = this.studentForm.value;
    this.studentService.save(this.studentAddNew).subscribe(res => {},
      error => {},
      () => {this.getAll()}
      );
    this.toastr.success('Add Student successfully!', 'Hi!');
  }

  deleteStudent(id: number) {
    this.studentService.delete(id).subscribe(res => {
      this.getAll();
    });
    this.toastr.success('Delete Student successfully!', 'Hi!');

  }

  getClass() {
    this.studentService.getClass().subscribe(value => {
      this.classObj = value;
    });
  }

  getStudent(student: Student) {
    this.studentDelete = student;
  }


  getListFromSearch(value: any) {
    this.students = value;
    if (value.length == 0) {
      this.toastr.error('Not for Found ', 'Search!');
    }
  }
}
