import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState } from '..';
import { IItem } from '../../models/common-item.model'



export const customItemsSelector = createFeatureSelector<IItem[]>("customItems")
