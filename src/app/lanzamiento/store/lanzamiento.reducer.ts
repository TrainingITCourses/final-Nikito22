import { LanzamientoActionTypes, LanzamientoActions } from './lanzamiento.actions';

export interface LanzamientoState {
  lanzamiento: any;
  err: string;
}

export const initialState: LanzamientoState = {
  lanzamiento: null,
  err: ''
};

export function reducer(state = initialState, action: LanzamientoActions): LanzamientoState {
  switch (action.type) {

    case LanzamientoActionTypes.CargarLanzamiento:
      return state;

    case LanzamientoActionTypes.LanzamientoCargado:
      return { ...state, lanzamiento: action.payload };

    case LanzamientoActionTypes.LanzamientoNoCargado:
      return { ...state, err: action.payload };

    default:
      return state;
  }
}
