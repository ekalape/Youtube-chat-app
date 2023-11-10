import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeature,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { IYoutubeItem } from '../models/youtube-item.model';
import { ICustomCard } from './entities/custom-card.model';

import { customCardReducer } from './reducers/custom-card.reducer';

export interface IState {
  customItems: ICustomCard[],
  /*   youtubeItems: IYoutubeItem[] */

}
export const StoreInitialState: IState = {
  customItems: [],
  /*   youtubeItems: [] */
}

export const reducers: ActionReducerMap<IState> = {
  customItems: customCardReducer
};


export const metaReducers: MetaReducer<IState>[] = isDevMode() ? [] : [];
