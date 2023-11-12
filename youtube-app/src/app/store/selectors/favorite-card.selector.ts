import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IItem } from 'src/app/models/common-item.model';
import { IStoredItem } from '../models/store.models';

export const youtubeItemsSelector = createFeatureSelector<IStoredItem[]>("youtubeItems")
//export const FavoritesSelector = createFeatureSelector<IItem[]>("favoriteItems")

export const favIdsSelector = createFeatureSelector<string[]>("favoriteIds")

export const favoriteItemsSelector = createSelector(youtubeItemsSelector, favIdsSelector,
  (items, ids) => items.filter(x => ids.includes(x.id)).map(x => x.item))


