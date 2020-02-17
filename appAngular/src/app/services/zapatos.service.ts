import {Injectable} from '@angular/core';
import {Zapato} from '../models/zapato';

@Injectable()
export class ZapatoService{

    public zapatos_array: Array<Zapato>;

    constructor(){
        this.zapatos_array = [
            new Zapato('Reebook Classic', 600,'Reebook','Blanco', true),
            new Zapato('Nike Velociraptor',800,'Nike','Rojo', false),
            new Zapato('Nike Fuego', 700,'Nike','Negro', true),
            new Zapato('Adidas 1980', 900,'Adidas','Azul', true),
            new Zapato('Adidas 1960', 670,'Adidas','Azul', true)
        ];
    }

    getZapatos():Array<Zapato>{
        return this.zapatos_array;
    }

    getTexto(){
        return "Servicio de zapatos";
    }
};