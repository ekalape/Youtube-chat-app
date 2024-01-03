import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { IItem } from '../models/common-item.model';
import { customCardReducer } from './reducers/custom-card.reducer';
import { favoriteReducer } from './reducers/favorites.reducer';
import { IStoredItem } from './models/store.model';
import { youtubeItemsReducer } from './reducers/youtube-items.reducer';
import { pageTokensReducer } from './reducers/page-tokens.reducer';
import { IPageTokens } from './models/page-tokens.model';

export interface IState {
  customItems: IItem[],
  favoriteItems: string[],
  youtubeItems: IStoredItem[],
  pageTokens: IPageTokens
}

export const StoreInitialState: IState = {
  customItems: [],
  favoriteItems: [],
  youtubeItems: [],
  pageTokens: {
    pageSize: 5,
    nextPageToken: undefined,
    previousPageToken: undefined,
  },
};

export const reducers: ActionReducerMap<IState> = {
  customItems: customCardReducer,
  favoriteItems: favoriteReducer,
  youtubeItems: youtubeItemsReducer,
  pageTokens: pageTokensReducer,

};

export const metaReducers: MetaReducer<IState>[] = isDevMode() ? [] : [];
