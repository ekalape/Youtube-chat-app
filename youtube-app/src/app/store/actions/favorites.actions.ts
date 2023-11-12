import { createAction, props } from '@ngrx/store';
import { IItem } from 'src/app/models/common-item.model';


export const AddToFavorite = createAction('[fav] addToFavorite', props<{ card: IItem }>())
export const RemoveFromFavorite = createAction('[fav] removeFromFavorite', props<{ card: IItem }>())
