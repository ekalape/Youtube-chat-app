import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IStoredItem } from '../models/store.model';

export const selectYoutubeItems = createFeatureSelector<IStoredItem[]>('youtubeItems');

export const selectFavIds = createFeatureSelector<string[]>('favoriteItems');

export const selectItems = createSelector(selectYoutubeItems, (items) => items.map((x) => x.item));

export const selectFavoriteItems = createSelector(
  selectYoutubeItems,
  selectFavIds,
  (items, ids) => items.filter((x) => ids.includes(x.id)).map((x) => x.item),
);

export const oneItemSelector = (id: string) => createSelector(
  selectYoutubeItems,
  (items) => items.find((x) => x.id === id)?.item,
);
