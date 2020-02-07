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
//interface: propiedad y metodos obligatorios para una clase
//herencia:una clase hija hereda una clase padre 
//decoradores: un patron de diseño mediante metadatos hacer una copia de clase de acuerdo a los metadatos que les pasemos

interface CamisetaBase{
    setColor(color: string):string;
    getColor():string;
};


function estampar(logo:string){
    return function(target: Function){
        target.prototype.estampado = function():void{
            console.log("Camiseta estampada con el logo "+logo);
        }
    }
}

@estampar("LV")
class Camiseta implements CamisetaBase{
    
    private color: string = "";
    private marca: string = "";
    private modelo: string = "";
    private talla: string = "";
    private precio: number = 0;

    constructor(color: string, marca: string, modelo:string, talla:string, precio: number){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color:string):string {
        this.color = color;
        return color;
    }

    public getColor() {
        return this.color;
    }
}

let playera = new Camiseta("Amarillo", "American Eagle", "Manga corta","Small", 150);
//playera.estampado();

console.log(playera);

playera.setColor("Verde");

console.log(playera.getColor());

let camiseta_chivas = new Camiseta("Rojiblanca", "Chivas", "Deportiva", "Chica", 800);

//clase hija
class Sudadera extends Camiseta{

    public capucha: boolean = false;

    setCapucha(capucha:boolean){
        this.capucha = capucha;
    };

    getCapucha():boolean{
        return this.capucha;
    }
};

let sudadera_chivas = new Sudadera("Rojiblanca", "Chivas", "manga larga", "mediana", 500);

sudadera_chivas.setColor("Naranja");
sudadera_chivas.setCapucha(true);


console.log(sudadera_chivas);