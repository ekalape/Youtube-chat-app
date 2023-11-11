import { createAction, props } from '@ngrx/store';
import { IItem } from 'src/app/models/common-item.model';

export const AddCustomCard = createAction('[custom] addCustomCard', props<{ card: IItem }>());
export const DeleteCustomCard = createAction('[custom] deleteCustomCard', props<{ id: string }>());



