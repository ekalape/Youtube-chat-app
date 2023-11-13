import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { IItem } from '../models/common-item.model';
import { customCardReducer } from './reducers/custom-card.reducer';
import { favoriteReducer } from './reducers/favorites.reducer';
import { IStoredItem } from './models/store.models';
import { youtubeItemsReducer } from './reducers/youtube-items.reducer';

export interface IState {
  customItems: IItem[],
  favoriteItems: string[],
  youtubeItems: IStoredItem[]

}
export const StoreInitialState: IState = {

  customItems: [],
  favoriteItems: [],
  youtubeItems: []
}

export const reducers: ActionReducerMap<IState> = {
  customItems: customCardReducer,
  favoriteItems: favoriteReducer,
  youtubeItems: youtubeItemsReducer

};


export const metaReducers: MetaReducer<IState>[] = isDevMode() ? [] : [];
