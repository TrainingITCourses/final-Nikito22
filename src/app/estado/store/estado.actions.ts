import { Action } from '@ngrx/store';


export enum EstadoActionTypes {
  CargarEstado = '[Estado] Cargar Estado',

}

export class CargarEstado implements Action {
  readonly type = EstadoActionTypes.CargarEstado;
}

export type EstadoActions = CargarEstado;