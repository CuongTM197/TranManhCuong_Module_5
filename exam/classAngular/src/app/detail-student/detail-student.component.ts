import { Component, OnInit } from '@angular/core';
import {Student} from "../student";
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {
student: Student;
id: number;
  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.studentService.findById(id).subscribe(value => {
      this.student = value;
    });
  }

}
