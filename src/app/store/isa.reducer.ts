import { IsaState } from './index';
import { IsaActions, IsaActionTypes } from './isa.actions';

export interface State {
  estados: any[];
  lanzamientos: any[];
  cargado: boolean;
  opcion: string;
  info: string;
  err: string;
}

export const initialState: State = {
  estados: [],
  lanzamientos: [],
  cargado: false,
  opcion: '',
  info: '',
  err: ''
};

export function reducer(state = initialState, action: IsaActions): State {
  switch (action.type) {
    case IsaActionTypes.CambioOpcion:
      state.opcion = action.payload.opcion;
      state.info = action.payload.info;
      return state;
    // return { ...state, opcion: action.payload.opcion, info: action.payload.info };

    case IsaActionTypes.CargarEstados:
      return state;

    case IsaActionTypes.EstadosCargados:
      return { ...state, estados: action.payload, cargado: state.lanzamientos.length > 0 };

    case IsaActionTypes.EstadosNoCargados:
      return { ...state, err: action.payload, cargado: false };

    case IsaActionTypes.CargarLanzamientos:
      return state;

    case IsaActionTypes.LanzamientosCargados:
      return { ...state, lanzamientos: action.payload, cargado: state.estados.length > 0 };

    case IsaActionTypes.LanzamientosNoCargados:
      return { ...state, err: action.payload, cargado: false };

    default:
      return state;

  }
}

