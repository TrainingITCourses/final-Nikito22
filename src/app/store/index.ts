import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromIsa from './isa.reducer';

export interface IsaState {
  isa: fromIsa.State;
}

export const reducers: ActionReducerMap<IsaState> = {
  isa: fromIsa.reducer
};

export const metaReducers: MetaReducer<IsaState>[] = !environment.production ? [] : [];
