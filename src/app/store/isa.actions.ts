import { Action } from '@ngrx/store';

export enum IsaActionTypes {
  CargarLanzamientos = '[Estado] Cargar Lanzamientos',
  LanzamientosCargados = '[Estado] Lanzamientos Cargados',
  LanzamientosNoCargados = '[Estado] Lanzamientos NoCargados',
  CargarEstados = '[Isa] Cargar Estados',
  EstadosCargados = '[Isa] Estados Cargados',
  EstadosNoCargados = '[Isa] Estados NoCargados',
  CambioOpcion = '[Isa] Cambio Opcion'
}

export interface Opcion {
  opcion: string;
  info: string;
}

export class CargarEstados implements Action {
  readonly type = IsaActionTypes.CargarEstados;
}

export class EstadosCargados implements Action {
  readonly type = IsaActionTypes.EstadosCargados;
  constructor(readonly payload: any) { }
}

export class EstadosNoCargados implements Action {
  readonly type = IsaActionTypes.EstadosNoCargados;
  constructor(readonly payload: any) { }
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

export class CambioOpcion implements Action {
  readonly type = IsaActionTypes.CambioOpcion;
  constructor(readonly payload: Opcion) { }
}

export type IsaActions = CargarEstados | EstadosCargados | EstadosNoCargados |
  CargarLanzamientos | LanzamientosCargados | LanzamientosNoCargados |
  CambioOpcion;

