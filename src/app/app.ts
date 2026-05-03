import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  numerosArriba = [1,2,3,4,5];
  numerosAbajo = [6,7,8,9,0];

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
      }
      this.resultado = this.resultado + mas;
    }
    
  }

  resetearC(): void{
    this.resultado = '';
    this.numero1 = 0;
    this.numero2 = 0;
    //console.log("Resetear calculadora... Valor: ",this.resultado, " Numeros... ", this.numero1, ", ", this.numero2);
  }

  resultadoNumero(): void {

    // El botón de "=" hará su función si tiene un "+" 
    if(this.resultado.includes('+')){

      /* Para obtener el segundo número, se hace un "split" del "+" para quedarme con la segunda parte para numero2.
      Ej: 598 + 67 =  ['598', '67'] --> [0]: '598'  ; [1]: '67
      */
      let resultado_split = this.resultado.split('+');
      // console.log("SPLIT: ", resultado_split);

      /* Si después del '+' hay valores, significa que se puede hacer la suma correctamente
         Ya que si no tiene un "+", no hará nada. */
      if(resultado_split[1] !== ''){
        this.numero1 = parseInt(resultado_split[0]);
        this.numero2 =  parseInt(resultado_split[1]);
        //console.log("N1: ", this.numero1, " + N2: ", this.numero2);

        this.resultado = (this.numero1 + this.numero2).toString();
        //console.log("Resultado: ", this.resultado);
        // Se restaura el valor de los números.
        this.numero1 = 0;
        this.numero2 = 0;
      }
    }
  }
}
