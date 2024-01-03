import { createReducer, on } from '@ngrx/store';
import { updatePageSize, updatePageTokens } from '../actions/page-tokens.actions';
import { IPageTokens } from '../models/page-tokens.model';

const initialPageTokensState: IPageTokens = {
  pageSize: 5,
  nextPageToken: undefined,
  previousPageToken: undefined,

};
export const pageTokensReducer = createReducer(
  initialPageTokensState,
  on(updatePageSize, (state, { size }): IPageTokens => ({
    ...state,
    pageSize: size,
  })),
  on(updatePageTokens, (state, { nextToken, prevToken }): IPageTokens => ({
    ...state,
    nextPageToken: nextToken,
    previousPageToken: prevToken,
  })),
);
