'use strict'
/*
var pelicula = {
    titulo:"Spider-man",
    año: 2018,
    pais: "USA",
};

let peliculas = [
    {titulo:"Batman", año:2017, pais: "USA"},
    pelicula,
];

var caja_peliculas = document.querySelector("#pelis");
for (const index in peliculas) {
    let p = document.createElement("p");
    p.append(peliculas[index].titulo+ ' - '+ peliculas[index].año);
    caja_peliculas.append(p);
};

console.log(pelicula);
console.log(peliculas);

if(typeof(Storage) != "undefined"){
    console.log("Si hay storage");
};

localStorage.setItem("titulo", "Curso de JS");

document.querySelector("#pelis").innerHTML = localStorage.getItem("titulo");

var pelicula = {
    titulo:"Spider-man",
    año: 2018,
    pais: "USA",
};

localStorage.setItem("pelicula", JSON.stringify(pelicula));

var json_pelis = JSON.parse(localStorage.getItem("pelicula"));

console.log(json_pelis);

localStorage.removeItem("pelicula");

localStorage.clear();
formulario que agregue peliculas

*/
window.addEventListener('load', function(){
    var h2 = document.querySelector("#h2_peliculas");
    h2.style.display = "none";

    var form = document.querySelector("#form_peliculas");

    form.addEventListener("submit", function(){
        var titulo = document.querySelector("#input_pelicula").value;
        if (titulo == null || titulo.length <= 0){
            console.log(titulo);
            alert("El campo debe contener algun valor");
            return false;
        };
            localStorage.setItem(titulo, titulo);
            h2.style.display = "block";
            var div_pelis = document.querySelector("#pelis");
            for (const index in localStorage) {
                if(typeof localStorage[index] =="string"){
                    var p = document.createElement("p");
                    p.append(localStorage[index]);
                    div_pelis.append(p);
                };
            };
    });
});

