import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import {ProjectService} from '../../services/project.service';
import {UploadService} from '../../services/upload.service';
import {Global} from '../../services/global';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['../create/create.component.css'],
  providers:[ProjectService, UploadService]
})

export class EditComponent implements OnInit {

  public tittle:string;
  public project: Project;
  public status: string;
  public filesToUplod : Array<File>;
  public saveProject: any;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {
      this.tittle = "Editar proyecto";
    }


    ngOnInit(): void {
      this._route.params.subscribe(params =>{
        let id = params.id;
  
        this.getProjectDetail(id);
      })
    }
  
    getProjectDetail(id){
      this._projectService.getProjectDetail(id).subscribe(
        response =>{
          this.project = response.project;
        },
        error =>{
          console.log(<any>error);
        }
      )
    }
}
