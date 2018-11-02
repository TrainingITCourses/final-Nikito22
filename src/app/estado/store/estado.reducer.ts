import { Action, State } from '@ngrx/store';
import { EstadoActions, EstadoActionTypes } from './estado.actions';


export interface EstadoState {
  cargado: boolean;
  err: string;
}

export const initialState: EstadoState = {
  cargado: false,
  err: ''
};

export function reducer(state = initialState, action: EstadoActions): EstadoState {
  switch (action.type) {

    default:
      return state;

  }
}
