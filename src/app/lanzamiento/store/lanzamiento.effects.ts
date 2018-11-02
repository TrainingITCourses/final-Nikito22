import { CargarLanzamiento, LanzamientoCargado, LanzamientoNoCargado, LanzamientoActionTypes } from './lanzamiento.actions';
import { IsaState } from './../../store/index';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Store } from '@ngrx/store';

@Injectable()
export class LanzamientoEffects {

  public isa$ = this.store.select('isa');

  @Effect()
  public cargaLanzamiento$ = this.actions$.ofType(LanzamientoActionTypes.CargarLanzamiento)
    .pipe(
      mergeMap((action: CargarLanzamiento) => this.isa$
        .pipe(
          map(i => new LanzamientoCargado(i.lanzamientos.find(l => l.id = action.payload))),
          catchError(err => of(new LanzamientoNoCargado(err.message)))
        )
      )
    );


  constructor(
    private actions$: Actions,
    private store: Store<IsaState>) {
  }

}
