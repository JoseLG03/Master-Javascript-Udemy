//Importar modulos del router de Angular
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//Importar componentes
import {ZapatosComponent} from './zapatos/zapatos.component';
import {HomeComponent} from './home/home.component';
import {VideojuegoComponent} from './videojuego/videojuego.component';
import {CursosComponent} from './cursos/cursos.component';
import {ExternoComponent} from './externo/externo.component';
import {ContactoComponent} from './contacto/contacto.component';

//Array de configuración de las rutas
const appRoutes: Routes=[
    {path:' ', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'zapatos', component:ZapatosComponent},
    {path:'videojuegos', component:VideojuegoComponent},
    {path:'cursos', component:CursosComponent},
    {path:'cursos/:nombre/', component:CursosComponent},
    {path:'cursos/:nombre/:followers', component:CursosComponent},
    {path:'externo', component: ExternoComponent},
    {path:'contacto', component: ContactoComponent},
    {path: '**', component: HomeComponent}
];

//exportar el modulo
export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);