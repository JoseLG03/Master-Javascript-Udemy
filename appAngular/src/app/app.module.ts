import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VideojuegoComponent} from './videojuego/videojuego.component';
import {ZapatosComponent} from './zapatos/zapatos.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
