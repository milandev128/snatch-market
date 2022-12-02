import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Appstate } from './app.state';
 
export const selectAppState = createFeatureSelector<Appstate>('appState');

export const selectUser = createSelector(selectAppState, state => state.user);