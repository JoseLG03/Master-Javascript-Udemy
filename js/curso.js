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
la media y la suma de 2 resultados hasta que el usuario meta un numero negativo

var contador=0;
var suma=0;
var res=0;

do{
    var num = parseInt(prompt("Introducir el número:"));
    console.log(num);
    if(isNaN(num)){
        num=0;    
    }else if(num>0){
        suma=num+suma;
        contador++;
    };
}
while(num>=0){
    res =suma/contador;

    alert("El promedio es "+res);

    alert("La suma es "+suma);
}
mostrar todos los numero entre 2 numero dados

var num1 = parseInt(prompt("Primer número:"));
var num2 = parseInt(prompt("Segundo número:"));

document.write("<h1>Los numeros impares entre el  " +num1+ " y el  " +num2+" :</h1>");
for (var i=num1; i<=num2; i++){
    if((i%2)!=0){
        document.write(i+"</br>");
    };
}
si un numero es par o impar



for(var i=1; i<=num; i++){
    if((num%i)==0){
        console.log("Este numero es divisor "+i);
    }
};

var num = parseInt(prompt("Dame tu número:"));

while(isNaN(num)){
    num = parseInt(prompt("Número no valido, vuelva a intentarlo:"));
}

if((num % 2)!=0){
    document.write("<p>El numero "+num+" es impar.</p>");
}else{
    document.write("<p>El numero "+num+" es par.</p>");
};
tabla de multiplicar de un numero dado


var num = parseInt(prompt("Dame el número para hacer la tabla:"));
while(isNaN(num)){
    num = parseInt(prompt("Número no valido, vuelva a intentarlo:"));
}
for(var i=1; i<=10; i++){
    document.write("<p>"+num+" x "+i+" = "+(num*i)+".</p>");
};
calculadora
*/
var num1 = parseInt(prompt("Dame el primero número:"));
while(isNaN(num1)){
    num1 = parseInt(prompt("Número 1 no valido, vuelva a intentarlo:"));
}
var num2 = parseInt(prompt("Dame el segundo número:"));
while(isNaN(num2)){
    num2 = parseInt(prompt("Número 2 no valido, vuelva a intentarlo:"));
}

document.write("<p>"+num1+" + "+num2+" = "+(num1+num2)+".</p>");
document.write("<p>"+num1+" - "+num2+" = "+(num1-num2)+".</p>");
document.write("<p>"+num1+" * "+num2+" = "+(num1*num2)+".</p>");
document.write("<p>"+num1+" / "+num2+" = "+(num1/num2)+".</p>");