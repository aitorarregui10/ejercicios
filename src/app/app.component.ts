import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculadoraComponent, EjerciciosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicios';
}
