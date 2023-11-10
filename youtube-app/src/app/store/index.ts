import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { IYoutubeItem } from '../models/youtube-item.model';
import { ICustomCard } from './entities/custom-card.model';
import { ICustomCardState } from './entities/store.model';
import { customCardReducer } from './reducers/custom-card.reducer';

export interface State {
  custom: ICustomCardState

}

export const reducers: ActionReducerMap<State> = {
  custom: customCardReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
