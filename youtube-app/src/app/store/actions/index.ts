import { Action, createAction, props } from '@ngrx/store';
import { ICustomCard } from '../entities/custom-card.model'

export const AddCustomCard = createAction('[custom] addCustomCard', props<{ card: ICustomCard }>());
export const DeleteCustomCard = createAction('[custom] deleteCustomCard', props<{ id: number }>());
export enum CustomCardTypes {
  add = '[custom] addCustomCard',
  delete = '[custom] deleteCustomCard',

}

