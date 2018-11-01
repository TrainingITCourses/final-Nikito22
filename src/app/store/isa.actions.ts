import { Action } from '@ngrx/store';

export enum IsaActionTypes {
  CargarLanzamientos = '[Lanzamiento] Cargar Lanzamientos',
  LanzamientosCargados = '[Lanzamiento] Lanzamientos Cargados',
  LanzamientosNoCargados = '[Lanzamiento] Lanzamientos NoCargados'
}

export class CargarLanzamientos implements Action {
  readonly type = IsaActionTypes.CargarLanzamientos;
}

export class LanzamientosCargados implements Action {
  readonly type = IsaActionTypes.LanzamientosCargados;
  constructor(readonly payload: any) { }
}

export class LanzamientosNoCargados implements Action {
  readonly type = IsaActionTypes.LanzamientosNoCargados;
  constructor(readonly payload: any) { }
}

export type IsaActions = CargarLanzamientos | LanzamientosCargados | LanzamientosNoCargados;
