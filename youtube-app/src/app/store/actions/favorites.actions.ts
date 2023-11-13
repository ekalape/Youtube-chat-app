import { createAction, props } from '@ngrx/store';
import { IItem } from 'src/app/models/common-item.model';


export const AddToFavorite = createAction('[fav] addToFavorite', props<{ cardId: string }>())
export const RemoveFromFavorite = createAction('[fav] removeFromFavorite', props<{ cardId: string }>())
