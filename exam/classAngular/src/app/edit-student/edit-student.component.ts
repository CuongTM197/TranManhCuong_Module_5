import {Component, OnInit} from '@angular/core';
import {Class} from "../class";
import {Student} from "../student";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../student.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  classObj: Class[] = [];
  students: Student;
  editForm: FormGroup;

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getClass();
    this.editForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      birthDay: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      class: new FormControl()
    });
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.studentService.findById(id).subscribe(value => {
      this.students = value;
      this.editForm.patchValue(this.students);
    });
  }

  getClass() {
    this.studentService.getClass().subscribe(value => {
      this.classObj = value;
    })
  }
  onsubmit() {
    const student = this.editForm.value;
    student.id = this.students.id;
    this.studentService.updateStudent(this.students.id, this.editForm.value).subscribe(res =>{
      this.router.navigateByUrl('/list');
      this.editForm.reset();
    })
  }
  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
