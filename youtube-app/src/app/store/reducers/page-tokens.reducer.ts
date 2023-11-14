import { createReducer, on } from '@ngrx/store';
import { updateNextPageToken, updatePageSize, updatePreviousPageToken } from '../actions/page-tokens.actions';
import { IPageTokens } from '../models/page-tokens.model';

const initialPageTokensState: IPageTokens = {
  pageSize: 5,
  nextPageToken: undefined,
  previousPageToken: undefined

}
export const pageTokensReducer = createReducer(initialPageTokensState,
  on(updatePageSize, (state, { size }) => ({
    ...state,
    pageSize: size
  })),
  on(updateNextPageToken, (state, { token }) => ({
    ...state, nextPageToken: token
  })),
  on(updatePreviousPageToken, (state, { token }) => ({
    ...state, previousPageToken: token
  })),
)
