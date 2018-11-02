import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ApiService } from 'src/app/api.service';
import { EstadoActionTypes } from './estado.actions';

@Injectable()
export class EstadoEffects {

  @Effect()
  public cargaEstadoIsa$ = this.actions$.ofType(EstadoActionTypes.CargarEstado)
  // .pipe(
  //   mergeMap((action: CargarEstado) => this.api.getEstados$()
  //     .pipe(
  //       map((l: any[]) => new EstadosCargados(l)),
  //       catchError(err => of(new EstadosNoCargados(err.message)))
  //     )
  //   )
  // );
  constructor(private actions$: Actions, public api: ApiService) { }
}
