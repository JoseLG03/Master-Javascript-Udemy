import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path:'', component:AboutComponent},
  {path:'sobre-mi', component:AboutComponent},
  {path:'proyectos', component:ProjectsComponent},
  {path:'crear-proyecto', component: CreateComponent},
  {path:'contacto', component:ContactComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const appRoutingProviders:any[] =[];
export const routing:ModuleWithProviders = RouterModule.forRoot(routes);

