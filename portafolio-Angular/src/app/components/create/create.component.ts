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

  constructor(
    private _projectService: ProjectService) {
      this.tittle = "Crear proyecto";
      this.project = new Project(
        '','','','',2020,'',''
      );
     }
  onSubmit(form){
    console.log(this.project);
  }   
  ngOnInit(): void {
  }
}
