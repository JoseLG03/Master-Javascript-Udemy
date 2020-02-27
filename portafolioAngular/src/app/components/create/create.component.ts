import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService]
})
export class CreateComponent implements OnInit {

  public tittle:string;
  public project: Project;
  public status: string;

  constructor(
    private _projectService: ProjectService) {
      this.tittle = "Crear proyecto";
      this.project = new Project(
        '','','','',2020,'',''
      );
     }
  onSubmit(form){
    this._projectService.createService(this.project).subscribe(
      response =>{
        if(response.project){
          this.status = 'sucess';
          form.reset();
        }else{
          this.status = 'failed';
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }   
  ngOnInit(): void {
  }
}
