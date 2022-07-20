import {Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';


@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  isMouseover = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  countStar(star: any) {
    this.isMouseover = false;
    this.selectedValue = star;
  }

  addStart(star: number) {
    if (this.isMouseover) {
      this.selectedValue = star;
    }
  }

  removeStart() {
    if (this.isMouseover) {
      this.selectedValue = 0;
    }
  }


}
