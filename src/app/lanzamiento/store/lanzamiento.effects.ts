import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LanzamientoActionTypes, CargarLanzamientos, LanzamientosCargados, LanzamientosNoCargados } from './lanzamiento.actions';
import { ApiService } from 'src/app/api.service';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class LanzamientoEffects {

  @Effect()
  cargarLanzamientos$ = this.actions$.pipe(
    ofType(LanzamientoActionTypes.CargarLanzamientos),
    mergeMap((action: CargarLanzamientos) =>
      this.api.getLanzamientos$().pipe(
        map(l => new LanzamientosCargados(l)),
        catchError(err => of(new LanzamientosNoCargados(err.message)))
      )
    )
  );

  constructor(private actions$: Actions, private api: ApiService) { }
}
