import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IItem } from '../../models/common-item.model';

export const selectCustomItems = createFeatureSelector<IItem[]>('customItems');

export const selectCustomItemsLength = createSelector(
  selectCustomItems,
  (items) => items.length,
);

export const oneCustomItemSelector = (id: string) => createSelector(
  selectCustomItems,
  (items) => items.find((x) => x.id === id),
);
