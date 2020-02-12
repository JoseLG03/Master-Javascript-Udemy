import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{routing,AppRoutingProviders} from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VideojuegoComponent} from './videojuego/videojuego.component';
import {ZapatosComponent} from './zapatos/zapatos.component';
import { CursosComponent } from './cursos/cursos.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideojuegoComponent,
    ZapatosComponent,
    CursosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule { }
