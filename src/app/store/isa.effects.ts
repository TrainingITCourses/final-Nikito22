import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ApiService } from 'src/app/api.service';
import {
  IsaActionTypes,
  CargarEstados, EstadosNoCargados, EstadosCargados,
  CargarLanzamientos, LanzamientosCargados, LanzamientosNoCargados
} from './isa.actions';

@Injectable()
export class IsaEffects {

  @Effect()
  public loadIsa$ = this.actions$.ofType(IsaActionTypes.CargarEstados)
    .pipe(
      mergeMap((action: CargarEstados) => this.api.getEstados$()
        .pipe(
          map((l: any[]) => new EstadosCargados(l)),
          catchError(err => of(new EstadosNoCargados(err.message)))
        )
      )
    );

  @Effect()
  public cargaLanzamientos$ = this.actions$.ofType(IsaActionTypes.CargarLanzamientos)
    .pipe(
      mergeMap((action: CargarLanzamientos) => this.api.getLanzamientos$()
        .pipe(
          map((l: any[]) => new LanzamientosCargados(l)),
          catchError(err => of(new LanzamientosNoCargados(err.message)))
        )
      )
    );

  constructor(private actions$: Actions, public api: ApiService) { }
}
