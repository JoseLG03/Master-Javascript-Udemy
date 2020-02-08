import {Component} from '@angular/core';

@Component({
    selector:'videojuego',
    template:`
        <h2>Componente de videojuegos</h2>
        <ul>
            <li>Super Mario</li>
            <li>GTA</li>
            <li>FIFA</li>
        </ul>
    `
})
export class VideojuegoComponent{
  constructor(){
      console.log("Se ha cargado el componente");
  }  
};