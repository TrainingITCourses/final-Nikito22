import { EstadoActions, EstadoActionTypes } from './estado.actions';


export interface EstadoState {
  estado: any;
  lanzamientos: any[];
  err: string;
}

export const initialState: EstadoState = {
  estado: null,
  lanzamientos: [],
  err: ''
};

export function reducer(state = initialState, action: EstadoActions): EstadoState {
  switch (action.type) {

    case EstadoActionTypes.CargarEstado:
      return state;

    case EstadoActionTypes.EstadoCargado:
      return { ...state, estado: action.payload.estado, lanzamientos: action.payload.lanzamientos };

    case EstadoActionTypes.EstadoNoCargado:
      return { ...state, err: action.payload };

    default:
      return state;

  }
}
