import {  IsaActions, LoadIsa, IsaActionTypes } from './isa.actions';

export interface State {
  totLanzamientos: number;
  estadoActual: any;
  lanzamientoActual: any;
}

export const initialState: State = {
  totLanzamientos: 0,
  estadoActual: {},
  lanzamientoActual: {}
};

export function reducer(state = initialState, action: IsaActions): State {
  switch (action.type) {
    case IsaActionTypes.LoadIsa:
    default:
      return state;
  }
}
