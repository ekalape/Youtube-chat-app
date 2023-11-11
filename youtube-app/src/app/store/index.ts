import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { IItem } from '../models/common-item.model';
import { customCardReducer } from './reducers/custom-card.reducer';

export interface IState {
  customItems: IItem[],
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
