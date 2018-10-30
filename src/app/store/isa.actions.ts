import { Action } from '@ngrx/store';

export enum IsaActionTypes {
  LoadIsa = '[Isa] Load Isa'
}

export class LoadIsa implements Action {
  readonly type = IsaActionTypes.LoadIsa;
}

export type IsaActions = LoadIsa;
