import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculato',
  templateUrl: './calculato.component.html',
  styleUrls: ['./calculato.component.css']
})
export class CalculatoComponent implements OnInit {
  number1: number = 0;
  number2: number = 0;
  result: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  Addition() {
    this.result = this.number1 * 1 + this.number2 * 1;
  }

  subtraction() {
    this.result = this.number1 - this.number2;
  }

  Multiplication() {
    this.result = this.number1 * this.number2;
  }

  Division() {
    this.result = this.number1 / this.number2;
  }
}
