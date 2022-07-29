import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {StudentService} from "../student.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  input = new FormControl();
  @Output() eventEmitter = new EventEmitter();

  constructor(private studentService: StudentService,private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  searchByName() {
    this.studentService.search(this.input.value).subscribe(value => {
      this.eventEmitter.emit(value);
    })
    this.toastr.success('Find students !', 'Hi!');
  }
}
