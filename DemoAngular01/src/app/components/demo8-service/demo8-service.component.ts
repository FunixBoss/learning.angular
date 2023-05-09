import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './demo8-service.component.html',
  styleUrls: ['./demo8-service.component.css']
})
export class Demo8ServiceComponent implements OnInit{

  result1: string;
  name: string;


  number1: string;
  number2: string;
  result: number;

  // injections
  constructor(
    private demoService: DemoService,
    private calcService: CalculatorService
  ){}

  ngOnInit(): void {
      this.result1 = this.demoService.hello();
      this.name = this.demoService.hi("Phú");
  }

  add() : void {
    this.result = this.calcService.add(parseFloat(this.number1), parseFloat(this.number2));
  }

  subtract() : void {
    this.result = this.calcService.subtract(parseFloat(this.number1), parseFloat(this.number2));

  }

  multiply() : void {
    this.result = this.calcService.multiply(parseFloat(this.number1), parseFloat(this.number2));

  }

  divide() : void {
    this.result = this.calcService.divide(parseFloat(this.number1), parseFloat(this.number2));

  }
}
