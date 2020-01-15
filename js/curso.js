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


console.log(window.location);

function abrir_ventana(url){ 
    window.open(url,"", "width = 400, height=300");
};
formulario con nombre, apellido, edad
evento submit
mostrar datos por pantalla
un boton que al click nos muestra los datos actuales del formulario

window.addEventListener('load', function(){
    var form = document.getElementById('form');
    var box_dashed= document.getElementById('box_dashed');
    box_dashed.style.display = 'none';
    form.addEventListener('submit', function(){
        console.log("evento enviar");
        
        var nombre = document.querySelector("#input_nombre").value; 
        var apellidos = document.querySelector("#input_apellidos").value;
        var edad = parseInt(document.querySelector("#input_edad").value);

        console.log(nombre, apellidos, edad);

        if (nombre.trim() == null || nombre.trim().length == 0){
            alert("El campo nombre debe contener algun valor");
            document.querySelector("#error_nombre").innerHTML="Nombre no valido";
            return false;
        }else{
            document.querySelector("#error_nombre").style.display = 'none';
        };
        if (apellidos.trim() == null || apellidos.trim().length == 0){
            alert("El campo apellidos debe contener algun valor");
            return false;
        };
        if (edad == null || edad <= 0 || isNaN(edad)){
            alert("El campo edad no es valido");
            return false;
        };
        box_dashed.style.display = 'block';

        var datos_usuario=[nombre, apellidos, edad];
        for (const index in datos_usuario) {
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[index]);
            box_dashed.append(parrafo);
        }
        //var p_nombre = document.querySelector("#p_nombre span");
        //p_nombre.innerHTML= nombre;
    });
});
*/
var div = document.querySelector("#usuarios");
var div_janet = document.querySelector("#div_janet");

    getUsuarios()
    .then(data => data.json())
    .then(data => {
        listado_usuario(data);

        return getJanet();
    })
    .then(data_janet => data_janet.json())
    .then(data_janet =>{
        usuario_janet(data_janet.data);
    });

    function getUsuarios(){
        return fetch("https://jsonplaceholder.typicode.com/users")
    };
    function getJanet(){
        return fetch("https://reqres.in/api/users/2")
    };

    function listado_usuario(usuarios){
        usuarios.map((user,i) =>{
            let nombre = document.createElement("h3");
            let email = document.createElement("p");

            nombre.innerHTML = i + user.name + " - "+ user.username;
            email.innerHTML = user.email;

            div.appendChild(nombre);
            div.appendChild(email);

            document.querySelector("#loading").style.display = "none";
        });
    };

    function usuario_janet(user){
            console.log(user);
            let nombre = document.createElement("h3");
            let email = document.createElement("h3");
            let img = document.createElement("img");

            nombre.innerHTML = user.first_name;
            email.innerHTML = user.email;
            img.src = user.avatar;   
            img.width = "100"; 

            div_janet.appendChild(nombre);
            div_janet.append(email);
            div_janet.append(img);

            document.querySelector("#loading_janet").style.display = "none"; 
    };