import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import {ProjectService} from '../../services/project.service';
import {UploadService} from '../../services/upload.service';
import {Global} from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService, UploadService]
})

export class CreateComponent implements OnInit {

  public tittle:string;
  public project: Project;
  public status: string;
  public filesToUplod : Array<File>;
  public saveProject: any;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService) {
      this.tittle = "Crear proyecto";
      this.project = new Project(
        '','','','',2020,'',''
      );
     }
  onSubmit(form){
    //guardar datos
    this._projectService.createService(this.project).subscribe(
      response =>{
        if(response.project){

          //subir imagen
          this._uploadService.makeFileRequest(Global.url+"upload-img/"+response.project._id,[],this.filesToUplod,'img').then
          ((result:any)=>{
            this.saveProject = result.project;
            this.status = 'sucess';
            form.reset();
          });
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

  fileChangeEvent(fileInput:any){
    this.filesToUplod = <Array<File>>fileInput.target.files;
  }
}
