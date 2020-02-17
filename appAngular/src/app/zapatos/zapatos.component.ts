import {Component, OnInit} from '@angular/core';
import {Zapato} from '../models/zapato';
import {ZapatoService} from '../services/zapatos.service';

@Component({
    selector: 'zapatos',
    templateUrl: './zapatos.component.html',
    providers:[ZapatoService] 
})
export class ZapatosComponent implements OnInit{
    public titulo: string;
    public zapatos_array: Array<Zapato>;
    public marcas : string[];
    public color: string;
    public miMarca:string;

    constructor( private _zapatoService: ZapatoService) {
        this.miMarca = "Jordan";
        this.color = 'green';
        this.titulo = "Componente de zapatos";
        this.marcas = new Array;
    }

    getMarcas(){
        this.zapatos_array.forEach((value, index) =>{
            if ( this.marcas.indexOf(value.marca) <0 ){
                this.marcas.push(value.marca);
            }
        });
        console.log(this.marcas);
    };

    getMarca(){
        alert(this.miMarca);
    };

    addMarca(){
        this.marcas.push(this.miMarca);
    };

    borrarMarca(index: number){
        //delete this.marcas[index];
        this.marcas.splice(index, 1);
    };

    onBlur(){
        console.log("Efecto blur");
    };

    mostrarPalabra(){
        alert(this.miMarca);
    }

    ngOnInit(){
        this.zapatos_array = this._zapatoService.getZapatos(); 

        this.getMarcas();
    }
    
};