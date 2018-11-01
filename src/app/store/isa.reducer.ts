import { IsaActions, IsaActionTypes } from './isa.actions';

export interface State {
  lanzamientos: any[];
  err: string;
}

export const initialState: State = {
  lanzamientos: [],
  err: ''
};

export function reducer(state = initialState, action: IsaActions): State {
  switch (action.type) {
    case IsaActionTypes.CargarLanzamientos:
    default:
      return state;

    case IsaActionTypes.LanzamientosCargados:
      return { ...state, lanzamientos: action.payload };

    case IsaActionTypes.LanzamientosNoCargados:
      return { ...state, err: action.payload };

  }
}

