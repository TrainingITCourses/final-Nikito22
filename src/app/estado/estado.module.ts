import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { EstadoComponent } from './estado.component';
import { EstadoDetalleComponent } from './estado-detalle/estado-detalle.component';

const estados: Routes = [
  { path: ':id', component: EstadoComponent },
  { path: 'detalle/:id', component: EstadoDetalleComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(estados)
  ],
  declarations: [EstadoComponent, EstadoDetalleComponent]
})
export class EstadoModule { }
