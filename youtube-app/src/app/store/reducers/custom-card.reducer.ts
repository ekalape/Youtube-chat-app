import { createReducer, on } from '@ngrx/store';
import { IItem } from 'src/app/models/common-item.model';
import { AddCustomCard, DeleteCustomCard } from '../actions/custom-card.actions';

export const customCardReducer = createReducer<IItem[]>(
  [],
  on(AddCustomCard, (state, { card }): IItem[] => ([...state, card])),
  on(DeleteCustomCard, (state, { id }): IItem[] => (state.filter((x) => x.id !== id))),

);
