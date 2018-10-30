import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromIsa from './isa.reducer';

export interface State {
  isa: fromIsa.State;
}

export const reducers: ActionReducerMap<State> = {
  isa: fromIsa.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
