import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LanzamientoComponent } from '../lanzamiento/lanzamiento.component';
import { LanzamientoDetalleComponent } from './lanzamiento-detalle/lanzamiento-detalle.component';
import { StoreModule } from '@ngrx/store';
import * as fromLanzamiento from './store/lanzamiento.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LanzamientoEffects } from './store/lanzamiento.effects';

const lanzamientos: Routes = [
  { path: ':id', component: LanzamientoComponent },
  { path: 'detalle/:id', component: LanzamientoDetalleComponent },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(lanzamientos),
    StoreModule.forFeature('lanzamiento', fromLanzamiento.reducer),
    EffectsModule.forFeature([LanzamientoEffects])
  ],
  declarations: [LanzamientoComponent, LanzamientoDetalleComponent]
})
export class LanzamientoModule { }
