'use strict'

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