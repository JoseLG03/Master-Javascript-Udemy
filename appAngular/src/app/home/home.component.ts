import {Component} from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent{
    public identificado: boolean = false;
    constructor(){};

    setIdentificarse(){
        this.identificado = true;
    }

    setNoIdentificarse(){
        this.identificado = false;
    }
};