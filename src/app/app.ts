import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  numero1: number = 0;
  numero2: number = 0;
  
  resultado: string = '';

  almacenarNumero(num : number): void {
    this.resultado = this.resultado + num.toString();
  }

  anyadirSuma(mas : string): void {
    if(this.resultado.includes('+')){ // Si tiene un '+' no se permite que se añada otro (suma de 2 números solamente)
      this.resultado;
    }else{
      /* Si el resultado es '' y se va a añadir un '+', el valor del primer número debe se un '0' y el resultado '0+'.
        Ej: res = '' --> '+' --> res = '0+'.
      */
      if(this.resultado.length === 0 ){
        // Número 1 es '0', solo faltaría que el resultado tuviera un '0' al principio.
        this.resultado = '0';
      }else{
        this.numero1 = parseInt(this.resultado);
      }
      this.resultado = this.resultado + mas;
      console.log("Numero 1: ", this.numero1,  " --- resultado: ", this.resultado);
    }
    
  }

  resetearC(): void{
    this.resultado = '';
    this.numero1 = 0;
    this.numero2 = 0;
    console.log("Resetear calculadora... Valor: ",this.resultado, " Numeros... ", this.numero1, ", ", this.numero2);
  }

  resultadoNumero(): void {

    // Para obtener el segundo número, se hace un "split" del "+" para quedarme con la segunda parte para numero2.
    // Ej: 598 + 67 =  ['598', '67'] --> [0]: '598'  ; [1]: '67
    let resultado_split = this.resultado.split('+');
    this.numero2 =  parseInt(resultado_split[1]);
    this.resultado = (this.numero1 + this.numero2).toString();
    console.log("Resultado: ", this.resultado);
  }
}
