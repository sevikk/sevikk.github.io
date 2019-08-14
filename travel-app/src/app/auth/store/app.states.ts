import { createFeatureSelector } from '@ngrx/store';

import * as auth from './reducers/auth.reducers';


export interface AppAuthState {
  authState: auth.State;
}

export const reducers = {
  auth: auth.reducer,
};

export const selectAuthState = createFeatureSelector<AppAuthState>('auth');
