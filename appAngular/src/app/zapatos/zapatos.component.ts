import {Component, OnInit} from '@angular/core';
import {Zapato} from '../models/zapato';

@Component({
    selector: 'zapatos',
    templateUrl: './zapatos.component.html'
})
export class ZapatosComponent implements OnInit{
    public titulo: string;
    public zapatos_array: Array<Zapato>;

    constructor() {
        this.titulo = "Componente de zapatos";
        this.zapatos_array = [
            new Zapato('Reebook', 600,'Blanco', true),
            new Zapato('MJ', 800,'Rojo', false),
            new Zapato('Nike', 700,'Negro', true),
            new Zapato('Adidas', 900,'Azul', true)
        ];
    }

    ngOnInit(){
        console.log(this.zapatos_array);
    }
    
};