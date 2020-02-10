import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
    selector:'videojuego',
    templateUrl:'./videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    
    public titulo: string;
    public listado: string;

  constructor(){
      this.titulo = "Componente de Videojuegos";
      this.listado = "Mis juegos favoritos";

      //console.log("Se ha cargado el componente");
  } 
  
  ngOnInit(){
      //console.log("onInit cargado");
  };

  ngDoCheck(){
      //console.log("DoCheck ejecutado");
  };

  ngOnDestroy(){
    //console.log("OnDestroy ejecutado");
  };

  cambiarTitulo(){
    this.titulo = "Mi nuevo titulo";  
  }
};