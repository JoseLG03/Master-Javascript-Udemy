//Importar modulos del router de Angular
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//Importar componentes
import {ZapatosComponent} from './zapatos/zapatos.component';
import {HomeComponent} from './home/home.component';
import {VideojuegoComponent} from './videojuego/videojuego.component';
import {CursosComponent} from './cursos/cursos.component';

//Array de configuración de las rutas
const appRoutes: Routes=[
    {path:'', component:HomeComponent},
    {path:'Zapatos', component:ZapatosComponent},
    {path:'Videojuegos', component:VideojuegoComponent},
    {path:'Cursos', component:CursosComponent},
    {path: '**', component: HomeComponent}
];

//exportar el modulo
export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);