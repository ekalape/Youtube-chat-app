import { createFeatureSelector } from '@ngrx/store';

import { IPageTokens } from '../models/page-tokens.model';

export const selectPageTokens = createFeatureSelector<IPageTokens>('pageTokens');
