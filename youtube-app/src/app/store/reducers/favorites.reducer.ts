import { createReducer, on } from '@ngrx/store';
import { IItem } from 'src/app/models/common-item.model';
import { AddToFavorite, RemoveFromFavorite } from '../actions/favorites.actions';


export const favoriteReducer = createReducer<IItem[]>([],
  on(AddToFavorite, (state, { card }) => [...state, card]),
  on(RemoveFromFavorite, (state, { card }) => state.filter(x => x.id !== card.id))
)


/* export const favoriteReducer = createReducer<string[]>([],
  on(AddToFavorite, (state, { id }) => [...state, id]),
  on(RemoveFromFavorite, (state, { id }) => state.filter(x => x !== id))
) */
