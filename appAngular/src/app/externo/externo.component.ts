import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})

export class ExternoComponent implements OnInit {

  public user:any;
  public userID: number;
  public fecha: any;

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.userID = 1;
  }

  ngOnInit(){
    this.fecha = new Date();
    this.cargaUsuario();
  }

  cargaUsuario(){
    this._peticionesService.getUsers(this.userID).subscribe(
      result =>{
        this.user = result.data;
        console.log(this.user);
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
}
