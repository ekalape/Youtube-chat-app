
import { createReducer, on } from '@ngrx/store';
import { getOneYoutubeItem, getYoutubeItems } from '../actions/youtube-items.actions';

import { IStoredItem } from '../models/store.model';


export const youtubeItemsReducer = createReducer<IStoredItem[]>([],
  on(getYoutubeItems, (state, { items }) => {

    return items.map(x => ({ id: x.id, item: x }))
  }),
  on(getOneYoutubeItem, (state, { item }) => {
    return [...state, { id: item.id, item }]
  })
)
