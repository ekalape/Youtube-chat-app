import { createReducer, on } from '@ngrx/store';
import { AddCustomCard, DeleteCustomCard } from '../actions/custom-card.actions';
import { IItem } from 'src/app/models/common-item.model';


export const customCardReducer = createReducer<IItem[]>([],
  on(AddCustomCard, (state, { card }) => {
    console.log('state', state)
    return ([...state, card])
  }),
  on(DeleteCustomCard, (state, { id }) => (state.filter(x => x.id !== id))),

)



