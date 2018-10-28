import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'estado', loadChildren: './estado/estado.module#EstadoModule' },
  { path: 'lanzamiento', loadChildren: './lanzamiento/lanzamiento.module#LanzamientoModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
