import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  input = new FormControl();
  @Output() eventEmitter = new EventEmitter();

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
  }

  searchByName() {
    this.studentService.search(this.input.value).subscribe(value => {
      this.eventEmitter.emit(value);
    })
  }
}
