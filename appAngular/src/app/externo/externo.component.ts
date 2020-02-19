import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { error } from '@angular/compiler/src/util';



@Component({
  selector: 'externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})

export class ExternoComponent implements OnInit {

  public user:any;
  public new_user:any;
  public userID: number;
  public fecha: any;
  public usuario_guardado: any;

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.userID = 1;
    this.new_user ={
      "name": "",
      "job": ""
    }
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

  onSubmit(value){
    this._peticionesService.addUser(this.new_user).subscribe(
      response =>{
        this.usuario_guardado= response;
        console.log(response);
        value.reset();
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

  clear_form(){

  }
}
