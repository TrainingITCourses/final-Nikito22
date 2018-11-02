import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromIsa from './isa.reducer';
import { environment } from '../../environments/environment';

export interface IsaState {
  isa: fromIsa.State;
}

export const reducers: ActionReducerMap<IsaState> = {
  isa: fromIsa.reducer
};

export const metaReducers: MetaReducer<IsaState>[] = !environment.production ? [] : [];
