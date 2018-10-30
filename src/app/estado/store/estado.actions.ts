import { Action } from '@ngrx/store';

export enum EstadoActionTypes {
  LoadEstados = '[Estado] Load Estados'
}

export class LoadEstados implements Action {
  readonly type = EstadoActionTypes.LoadEstados;
}

export type EstadoActions = LoadEstados;
