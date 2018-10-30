import { Action } from '@ngrx/store';
import { EstadoActions, EstadoActionTypes } from './estado.actions';

export interface State {
  id: Number;
}

export const initialState: State = {
  id: 0,
};

export function reducer(state = initialState, action: EstadoActions): State {
  switch (action.type) {

    case EstadoActionTypes.LoadEstados:
      return state;


    default:
      return state;
  }
}
