import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Mi primera app con Angular';
  
  public mostrarVideojuegos: boolean = true;

  ocultarVideojuegos(value){
    this.mostrarVideojuegos = value;
  }
}
