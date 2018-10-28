import { Action } from '@ngrx/store';
import { IsaActions } from './isa.actions';

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

export function reducer(state = initialState, action: IsaAction): State {
  switch (action.type) {

    default:
      return state;
  }
}
