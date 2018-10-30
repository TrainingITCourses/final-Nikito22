import { Action } from '@ngrx/store';

export enum LanzamientoActionTypes {
  CargarLanzamientos = '[Lanzamiento] Cargar Lanzamientos',
  LanzamientosCargados = '[Lanzamiento] Lanzamientos Cargados',
  LanzamientosNoCargados = '[Lanzamiento] Lanzamientos NoCargados'
}

export class CargarLanzamientos implements Action {
  readonly type = LanzamientoActionTypes.CargarLanzamientos;
}

export class LanzamientosCargados implements Action {
  readonly type = LanzamientoActionTypes.LanzamientosCargados;
  constructor(readonly payload: any) {}
}

export class LanzamientosNoCargados implements Action {
  readonly type = LanzamientoActionTypes.LanzamientosNoCargados;
  constructor(readonly payload: any) {}
}


export type LanzamientoActions = CargarLanzamientos | LanzamientosCargados | LanzamientosNoCargados;
