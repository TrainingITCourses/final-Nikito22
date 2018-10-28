import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LanzamientoComponent } from '../lanzamiento/lanzamiento.component';
import { LanzamientoDetalleComponent } from './lanzamiento-detalle/lanzamiento-detalle.component';

const lanzamientos: Routes = [
  { path: ':id', component: LanzamientoComponent },
  { path: 'detalle/:id', component: LanzamientoDetalleComponent },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(lanzamientos)
  ],
  declarations: [LanzamientoComponent, LanzamientoDetalleComponent]
})
export class LanzamientoModule { }
