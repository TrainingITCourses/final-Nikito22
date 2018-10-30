import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EstadoActionTypes } from './estado.actions';

@Injectable()
export class EstadoEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(EstadoActionTypes.LoadEstados));

  constructor(private actions$: Actions) {}
}
