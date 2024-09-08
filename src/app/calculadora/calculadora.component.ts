import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  constructor() {}

  ngOnInit(): void {}

  pressKey1(miVariable: any) {
    this.num1 += +miVariable.target.value;  // Convierte el valor a número y lo asigna a num1
  }
  
  pressKey2(miVariable: any) {
    this.num2 += +miVariable.target.value;  // Convierte el valor a número y lo asigna a num2
  }
  
  reset() {
    this.num1 = 0;
    this.num2 = 0;
    this.resultado = 0;
  }
  
  

  sum() {
    this.resultado = this.num1 + this.num2;
  }
   @Input() tituloARecibir: string = '';  // Esta es la variable que recibirá datos del componente padre
}
