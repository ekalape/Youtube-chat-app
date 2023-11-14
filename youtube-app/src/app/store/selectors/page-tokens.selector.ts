import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IPageTokens } from '../models/page-tokens.model';


export const pageTokensSelector = createFeatureSelector<IPageTokens>("pageTokens");


