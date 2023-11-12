import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { IItem } from '../models/common-item.model';
import { customCardReducer } from './reducers/custom-card.reducer';
import { favoriteReducer } from './reducers/favorites.reducer';

export interface IState {
  customItems: IItem[],
  favoriteItems: IItem[],
  /*   youtubeItems: IYoutubeItem[] */

}
export const StoreInitialState: IState = {
  customItems: [],
  favoriteItems: [],
  /*   youtubeItems: [] */
}

export const reducers: ActionReducerMap<IState> = {
  customItems: customCardReducer,
  favoriteItems: favoriteReducer
};


export const metaReducers: MetaReducer<IState>[] = isDevMode() ? [] : [];
