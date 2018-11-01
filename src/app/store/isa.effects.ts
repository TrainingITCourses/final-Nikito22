import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ApiService } from 'src/app/api.service';
import { IsaActionTypes, CargarLanzamientos, LanzamientosNoCargados, LanzamientosCargados } from './isa.actions';

@Injectable()
export class IsaEffects {

  @Effect()
  public loadIsa$ = this.actions$.ofType(IsaActionTypes.CargarLanzamientos)
    .pipe(
      mergeMap((action: CargarLanzamientos) => this.api.getLanzamientos$()
        .pipe(
          map((l: any) => new LanzamientosCargados(l.launches)),
          catchError(err => of(new LanzamientosNoCargados(err.message)))
        )
      )
    );

  constructor(private actions$: Actions, public api: ApiService) { }
}
