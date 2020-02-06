"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
let cadena: string | number= "Hola mundo";
// let cualquiera: any = "";
let lenguas: Array <string> = ['PHP','Java', 'Javascript', 'C#'];
// type letrasonumeros = string |number;
let años: number[] = [12,4,6,7,89];

console.log(lenguas);
console.log(años);

function getNumber(numero: number):string{
    return "El numero es "+ numero;
};

console.log(getNumber(5));

//asignanco valores al objeto cuando es publico
camiseta.color = "rojo";
camiseta.marca = "Nike";
camiseta.modelo = "T-shirt";
camiseta.talla = "L";
camiseta.precio = 120;

*/
;
var Camiseta = /** @class */ (function () {
    function Camiseta(color, marca, modelo, talla, precio) {
        this.color = "";
        this.marca = "";
        this.modelo = "";
        this.talla = "";
        this.precio = 0;
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
        return color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
/*
let playera = new Camiseta("Amarillo", "American Eagle", "Manga corta","Small", 150);

console.log(playera);

playera.setColor("Verde");

console.log(playera.getColor());
*/
var camiseta_chivas = new Camiseta("Rojiblanca", "Chivas", "Deportiva", "Chica", 800);
console.log(camiseta_chivas);
//clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.capucha = false;
        return _this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    ;
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
;
var sudadera_chivas = new Sudadera("Rojiblanca", "Chivas", "manga larga", "mediana", 500);
sudadera_chivas.setColor("Naranja");
sudadera_chivas.setCapucha(true);
console.log(sudadera_chivas);
