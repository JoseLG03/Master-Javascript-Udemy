import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'calculadora'
})
export class CaculadoraPipe implements PipeTransform{
    //dato |calculadora:otroDato
    //dato1             //dato2
    transform(value:any, value2:any){
        let operacion = `
            Suma: ${value+value2} -
            Resta:${value - value2} -
            Multiplicacion:${value * value2} -
            Division:${value / value2}
        `;
        return operacion;
    }
}