import { Action } from '@ngrx/store';
import { LanzamientoActionTypes, LanzamientoActions } from './lanzamiento.actions';

export interface State {
  id: Number;
  lanzamientos: any[];
}

export const initialState: State = {
  id: 0,
  lanzamientos: []
};

export function reducer(state = initialState, action: LanzamientoActions): State {
  switch (action.type) {

    case LanzamientoActionTypes.CargarLanzamientos:
      return state;

    case LanzamientoActionTypes.LanzamientosCargados:
      // state.lanzamientos = action.payload;
      return state;

    case LanzamientoActionTypes.LanzamientosNoCargados:
      return state;

    default:
      return state;
  }
}
