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

//clase: molde del objeto
//propiedades: caracteristicas del objeto
//metodos: funciones o acciones del objeto

class Camiseta{
    private color: string = "";
    private marca: string = "";
    private modelo: string = "";
    private talla: string = "";
    private precio: number = 0;

    public setColor(color:string) {
        this.color = color;
    }

    public getColor() {
        return this.color;
    }
}

let playera = new Camiseta();

playera.setColor("Verde");

console.log(playera.getColor());