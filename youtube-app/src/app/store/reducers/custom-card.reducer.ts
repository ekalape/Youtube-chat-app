import { Action, createReducer, on } from '@ngrx/store';

import { AddCustomCard, DeleteCustomCard } from '../actions';
import { ICustomCard } from '../entities/custom-card.model';
import { IState, StoreInitialState } from '..';



export const customCardReducer = createReducer<ICustomCard[]>([],
  on(AddCustomCard, (state, { card }) => {
    console.log('state', state)
    return ([...state, card])
  }),
  on(DeleteCustomCard, (state, { id }) => (state.filter(x => x.id !== id)))
)



