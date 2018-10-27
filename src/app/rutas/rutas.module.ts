import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoComponent } from '../estado/estado.component';
import { LanzamientoComponent } from '../lanzamiento/lanzamiento.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'estado/:id', component: EstadoComponent },
  { path: 'lanzamiento/:id', component: LanzamientoComponent },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, EstadoComponent, LanzamientoComponent]
})
export class RutasModule { }
