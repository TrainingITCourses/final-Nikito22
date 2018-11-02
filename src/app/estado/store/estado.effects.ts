import { IsaState } from './../../store/index';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { EstadoActionTypes, CargarEstado, EstadoCargado, DatosEstado } from './estado.actions';
import { Store } from '@ngrx/store';
import { EstadosNoCargados } from 'src/app/store/isa.actions';

@Injectable()
export class EstadoEffects {

  public isa$ = this.store.select('isa');

  @Effect()
  public cargaEstado$ = this.actions$.ofType(EstadoActionTypes.CargarEstado)
    .pipe(
      mergeMap((action: CargarEstado) => this.isa$
        .pipe(
          map(i => new EstadoCargado(this.DameDatosEstado(i, action.payload))),
          catchError(err => of(new EstadosNoCargados(err.message)))
        )
      )
    );


  constructor(
    private actions$: Actions,
    private store: Store<IsaState>) {
  }

  DameDatosEstado(l, id): DatosEstado {
    const d: DatosEstado = {
      estado: l.estados.find(e => e.id === Number(id)),
      lanzamientos: l.lanzamientos.filter(lanz => lanz.status === Number(id))
    };
    return d;
  }
}
