import { Action, createReducer, on } from '@ngrx/store';
import { ICustomCardState, customCardInitialState } from '../entities/store.model';
import { CustomCardTypes, AddCustomCard, DeleteCustomCard } from '../actions';
import { ICustomCard } from '../entities/custom-card.model';



export const customCardReducer = createReducer<ICustomCardState>(customCardInitialState,
  on(AddCustomCard, (state, { card }) => ({ ...state, customItems: [...state.customItems, card] })),
  on(DeleteCustomCard, (state, { id }) => ({ ...state, customItems: state.customItems.filter(x => x.id === id) }))
)



