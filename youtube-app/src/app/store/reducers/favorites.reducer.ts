import { createReducer, on } from '@ngrx/store';
import { AddToFavorite, RemoveFromFavorite } from '../actions/favorites.actions';

export const favoriteReducer = createReducer<string[]>(
  [],
  on(AddToFavorite, (state, { cardId }): string[] => [...state, cardId]),
  on(RemoveFromFavorite, (state, { cardId }): string[] => state.filter((x) => x !== cardId)),
);
