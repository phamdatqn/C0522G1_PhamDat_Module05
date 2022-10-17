import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-component',
  templateUrl: './calculator-component.component.html',
  styleUrls: ['./calculator-component.component.css']
})
export class CalculatorComponentComponent implements OnInit {

  number1: number;
  number2: number;
  result: number;

  constructor() { }

  ngOnInit(): void {
  }

  addition(): void {
    this.result = Number(this.number1) + Number(this.number2);
  }

  subtraction(): void {
    this.result = Number(this.number1) - Number(this.number2);
  }

  multiplication(): void {
    this.result = Number(this.number1) * Number(this.number2);
  }

  division(): void {
    this.result = Number(this.number1) / Number(this.number2);
  }
}
