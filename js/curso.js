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

function calculadora(num1,num2){
    console.log("La suma de "+num1+" y de "+num2+" es de "+(num1+num2)+".");
    console.log("La resta de "+num1+" y de "+num2+" es de "+(num1-num2)+".");
}

calculadora(10,5);


var pelicula = function(nombre){
    return "La pelicula se llama:    "+nombre;
}

function findLongest(str) {
    var spl = str.split(" ");
    console.log(spl);
    var longest = 0;
    
    for (var i = 0; i <= spl.length; i++) {
    if (spl(i).length > longest) {
        longest = spl[i].length
      }
    }
    console.log(spl);
    return spl;
}; 

findLongest("Hola mundo. Saludos desde Santa Ana Maya.");

function par_impar(num){
    return (num % 2)===0 ? "Par" : "Impar";
};

console.log(par_impar(7));

function calculadora(num1,num2){
    var suma=`La suma de ${num1} y de ${num2} es de: `+(num1+num2)+`.`; 
    document.write(suma);
}

calculadora(10,5);


var lenguajes=["C", "C++","Java", "Phyton", "Ruby", "Javascript"];

lenguajes.forEach((elemento,index,array)=>{
    //console.log(lenguajes);
    //document.write("<li>"+index+" - "+elemento +"</li>");
});

lenguajes.push("PHP");
console.log(lenguajes);
lenguajes.pop();
console.log(lenguajes);

var index = lenguajes.indexOf("C++");
console.log(index);
if(index > -1){
    lenguajes.splice(index,1);
}
console.log(lenguajes);

var lenguajes_string = lenguajes.join();
console.log(lenguajes_string);
pide 6 numeros
mostrar el array entero y en la pagina y consola
ordenar el array
invertir su orden y mostrarlo
mostrar cuantos elementos tiene
buscar un valor dado por el usuario y decir si esta y en que posicion

var numeros_array=[];
for(var i=0; i<=5; i++){
    var elemento = parseInt(prompt("Introduce tu número:"));
    numeros_array.push(elemento);
};

function mostrarArray(array, texto=""){
    document.write("<h1>Contenido del array "+texto+"</h1>");
    document.write("<ul>");
    numeros_array.forEach((array)=>{
    document.write("<li>"+ array +"</li>");
    });
    document.write("</ul>");
};

mostrarArray(numeros_array);

numeros_array.sort((a,b)=>a-b);
console.log(numeros_array);
mostrarArray(numeros_array, "ordenado.");

numeros_array.reverse();
mostrarArray(numeros_array, "en reversa.");
console.log(numeros_array);

console.log(numeros_array.length);

var elemento_buscado = prompt("Introduce el número que quieres buscar:");

var busqueda=numeros_array.find(numeros_array => numeros_array==elemento_buscado);
if (busqueda = elemento_buscado){
    var busqueda_index = numeros_array.findIndex(numeros_array => numeros_array == elemento_buscado); 
    console.log("Elemento encontrado: "+elemento_buscado+" con el index "+ busqueda_index);
}else{
    console.log("No se encontro su busqueda");
}

console.log(busqueda);
*/

var todos_los_div = document.getElementsByTagName("div");

var valor;
for(valor in todos_los_div){
   if(typeof todos_los_div[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todos_los_div[valor].textContent);
        parrafo.append(texto);
        document.querySelector("#mi_seccion").prepend(parrafo);
   }
};

console.log(todos_los_div);

console.log(window.location);

function abrir_ventana(url){ 
    window.open(url,"", "width = 400, height=300");
};