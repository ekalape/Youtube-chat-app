
import { createReducer, on } from '@ngrx/store';
import { getYoutubeItems } from '../actions/youtube-items.actions';

import { IStoredItem } from '../models/store.models';


export const youtubeItemsReducer = createReducer<IStoredItem[]>([],
  on(getYoutubeItems, (state, { items }) => {
    console.log("inside reducer");
    return items.map(x => ({ id: x.id, item: x }))
  })
)
