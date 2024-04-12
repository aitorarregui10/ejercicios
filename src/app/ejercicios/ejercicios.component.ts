import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicios',
  standalone: true,
  imports: [],
  templateUrl: './ejercicios.component.html',
  styleUrl: './ejercicios.component.css'
})
export class EjerciciosComponent {

  ejercicio1() {
    // EJERCICIO 1
    // TODO: Modifique el código para agregar tipos a las declaraciones de variables. 
    // El JavaScript resultante debería verse igual que el ejemplo original cuando haya terminado.
    let firstName: string;
    let lastName: any;
    let fullName: any;
    let age: string | number;
    let ukCitizen: string | boolean | number;
    firstName = 'Rebecca';
    lastName = new String ('Smith');
    age = 42;
    ukCitizen = false;
    fullName = firstName + " " + lastName;
    if (ukCitizen) {
    console.log("My name is " + fullName as string + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
    } else {
    console.log("My name is " + <string>fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
    }
    }
    ejercicio2() {
      /* EJERCICIO 2
      TODO: Puede utilizar tipos para garantizar los resultados de la operación.
      Ejecute el código tal cual y luego modifíquelo.
      que tenga variables fuertemente tipadas. Luego, solucione los errores que
      encuentre para que el resultado
      devuelto a a es 12. */
      let x: unknown;
      let y: number;
      let a: number;
      x = 'five';
      y = 7;
      
      // Mapeado de cadenas a números
      const stringToNumber: { [key: string]: number } = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
      };
    
      if (typeof x === 'number') {
        a = x + y;
        console.log(a);
      } else if (typeof x === 'string') {
        const parsedX = stringToNumber[x];
        if (parsedX !== undefined) {
          a = parsedX + y;
          console.log(a);
        } else {
          console.log("No se puede convertir a un número válido");
        }
      }
    }

    ejercicio3() {
      // * EJERCICIO 3

      // TODO: En el siguiente código, implemente un tipo de enumeración llamado Temporada que representa
      // las constantes "Otoño", "Invierno", "Primavera" y "Verano". Luego, actualice la función para que
      
      // puedes pasar la temporada haciendo referencia a un elemento en la enumeración, por ejemplo
      // Season.Fall, en lugar de la cadena literal "Fall". */
      
      enum season {
        Fall = "Fall",
        Winter = "Winter",
        Spring = "Spring",
        Summer = "Summer"
    }


    function whichMonths(season: season): string {
        let monthsInSeason: string;
        switch (season) {
            case "Fall":
                monthsInSeason = "September to November";
                break;
            case "Winter":
                monthsInSeason = "December to February";
                break;
            case "Spring":
                monthsInSeason = "March to May";
                break;
            case "Summer":
                monthsInSeason = "June to August";
                break;
            default:
                monthsInSeason = "Invalid season";
        }
        return monthsInSeason;
    }

    console.log(whichMonths(season.Fall));
}

  


      ejercicio4() {
        /* EXERCISE 4
        TODO: Declare the array as the type to match the type of the items in the
        array. */
        let randomNumbers: number[] = []; // Declaramos un array que contendrá solo números

        let nextNumber: number; // Declaramos obligando a que sea number el siguiente número general
        
        for (let i = 0; i < 10; i++) {
          nextNumber = Math.floor(Math.random() * (100 - 1)) + 1; // Genera un número aleatorio entre 1 y 100
          randomNumbers.push(nextNumber); // Agrega el número generado al Array randomNumbers
        }
        
        console.log(randomNumbers); // Imprime el Array con los números aleatorios generados
      }     

}
