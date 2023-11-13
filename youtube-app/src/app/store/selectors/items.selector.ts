import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IStoredItem } from '../models/store.models';

export const youtubeItemsSelector = createFeatureSelector<IStoredItem[]>("youtubeItems")


export const favIdsSelector = createFeatureSelector<string[]>("favoriteItems");

export const itemsSelector = createSelector(youtubeItemsSelector, (items) => items.map(x => x.item))

export const favoriteItemsSelector = createSelector(youtubeItemsSelector, favIdsSelector,
  (items, ids) => items.filter(x => ids.includes(x.id)).map(x => x.item))


export const oneItemSelector = (id: string) => createSelector(youtubeItemsSelector, (items) => items.find(x => x.id === id)?.item)
