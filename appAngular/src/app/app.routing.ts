//Importar modulos del router de Angular
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//Importar componentes
import {ZapatosComponent} from './zapatos/zapatos.component';
import {VideojuegoComponent} from './videojuego/videojuego.component';
import {CursosComponent} from './cursos/cursos.component';

//Array de configuración de las rutas
const appRoutes: Routes=[
    {path:'', component:ZapatosComponent}
];