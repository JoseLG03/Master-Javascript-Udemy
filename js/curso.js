'use strict'
/*
var edad=19;
var corsa="soy un corsario";

if (edad>18){
    console.log("Eres mayor de edad");
}else{
    console.log("No eres mayor de edad");
}

var confirmacion= confirm("Seguro que quieres continuar");

console.log(confirmacion);

var edad_usuario = prompt("Edad:", 18);

console.log(edad_usuario);
pide 2 numeros y nos dice que el mayor, cual es menor o si son iguales
*/

var num1 = parseInt(prompt("Primer número:"));
var num2 = parseInt(prompt("Segundo número:"));

while(num1<=0 || num2<=0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("Primer número:"));
    num2 = parseInt(prompt("Segundo número:"));
}
if(num1>0 & num2>0){
    if(num1>num2){
        alert(num1+" es mayor a "+num2);
    }else if(num2>num1){
        alert(num2+" es mayor que "+num1);
    }
    else if(num1==num2){
        alert("Los 2 numeros son iguales");
    }else{
        alert("Numeros no validos");
    }
};