import { createAction, props } from '@ngrx/store';
import { IPageTokens } from '../models/page-tokens.model';

export const updatePageSize = createAction('[page-token] Update Page Size', props<{ size: number }>());

export const updateNextPageToken = createAction('[page-token] Update Next Page Token', props<{ token: string | undefined }>());
export const updatePreviousPageToken = createAction('[page-token] Update Previous Page Token', props<{ token: string | undefined }>());


export const goForwardAction = createAction('[page-token] Update Previous Page Token')

