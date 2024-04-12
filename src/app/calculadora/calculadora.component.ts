import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

// Variables para almacenar los valores de los inputs y resultados
sumando: number = 0;
num1: number = 0;
num2: number = 0;
cantidadDivisa: number = 0;
restando: number = 0;
multiplicando: number = 1;
divisor: number = 1;
valorEuros: number = 0;
valorLibras: number = 0;
valorDolares: number = 0;

// Función para sumar
sumar(): void {
  this.sumando = parseFloat(this.num1.toString()) + parseFloat(this.num2.toString());
}

// Función para restar
restar(): void {
  this.restando = parseFloat(this.num1.toString()) - parseFloat(this.num2.toString());
}

// Función para multiplicar
multiplicar(): void {
  this.multiplicando = parseFloat(this.num1.toString()) * parseFloat(this.num2.toString());
}

// Función para dividir
dividir(): void {
  if (parseFloat(this.num2.toString()) !== 0) {
    this.divisor = parseFloat(this.num1.toString()) / parseFloat(this.num2.toString());
  } else {
    console.log("No se puede dividir entre cero.");
  }
}

// Función para convertir a euros
euros(): void {
  this.valorEuros = parseFloat(this.cantidadDivisa.toString()) * 0.85; //Cambio a fecha 12/04/24
}

// Función para convertir a libras
libras(): void {
  this.valorLibras = parseFloat(this.cantidadDivisa.toString()) * 0.72; //Cambio a fecha 12/04/24
}

// Función para convertir a dólares
dolares(): void {
  this.valorDolares = parseFloat(this.cantidadDivisa.toString()) * 1.23; //Cambio a fecha 12/04/24
}

}
