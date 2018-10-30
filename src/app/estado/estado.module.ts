import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { EstadoComponent } from './estado.component';
import { EstadoDetalleComponent } from './estado-detalle/estado-detalle.component';
import { StoreModule } from '@ngrx/store';
import * as fromEstado from './store/estado.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EstadoEffects } from './store/estado.effects';

const estados: Routes = [
  { path: ':id', component: EstadoComponent },
  { path: 'detalle/:id', component: EstadoDetalleComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(estados),
    StoreModule.forFeature('estado', fromEstado.reducer), EffectsModule.forFeature([EstadoEffects])
  ],
  declarations: [EstadoComponent, EstadoDetalleComponent]
})
export class EstadoModule { }
