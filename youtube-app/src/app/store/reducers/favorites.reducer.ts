import { createReducer, on } from '@ngrx/store';
import { IItem } from 'src/app/models/common-item.model';
import { AddToFavorite, RemoveFromFavorite } from '../actions/favorites.actions';


export const favoriteReducer = createReducer<string[]>([],
  on(AddToFavorite, (state, { cardId }) => [...state, cardId]),
  on(RemoveFromFavorite, (state, { cardId }) => state.filter(x => x !== cardId))
)


