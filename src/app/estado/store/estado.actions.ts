import { Action } from '@ngrx/store';


export enum EstadoActionTypes {
  CargarEstado = '[Estado] Cargar Estado',
  EstadoCargado = '[Estado] Estado Cargado',
  EstadoNoCargado = '[Estado] Estado No Cargado',
}


export interface DatosEstado {
  estado: any;
  lanzamientos: any[];
}
export class CargarEstado implements Action {
  readonly type = EstadoActionTypes.CargarEstado;
  constructor(readonly payload: string) { }
}
export class EstadoCargado implements Action {
  readonly type = EstadoActionTypes.EstadoCargado;
  constructor(readonly payload: DatosEstado) { }
}

export class EstadoNoCargado implements Action {
  readonly type = EstadoActionTypes.EstadoNoCargado;
  constructor(readonly payload: string) { }
}

export type EstadoActions = CargarEstado | EstadoCargado | EstadoNoCargado;
