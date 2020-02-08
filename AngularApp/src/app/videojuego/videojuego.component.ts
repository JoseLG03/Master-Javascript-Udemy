import { Component } from '@angular/core';

@Component({
    selector: 'videojuego',
    template: `
        <h2>Componente de videojuegos</h2>
        <ul>
            <li>Super Mario</li>
            <li>GTA San Andreas</li>
            <li>Fifa</li>
        </ul>
    `
})

export class VideojuegoComponent{
    constructor(){
        console.log("Se ha cargado el componente Videojuego");        
    }
}