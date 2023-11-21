import { createAction, props } from '@ngrx/store';

export const updatePageSize = createAction('[page-token] Update Page Size', props<{ size: number }>());

export const updatePageTokens = createAction(
  '[page-token] Update Page Tokens',
  props<{ nextToken: string | undefined, prevToken: string | undefined }>(),
);

export const goForwardAction = createAction('[page-token] Update Previous Page Token');
