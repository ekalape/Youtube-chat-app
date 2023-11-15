import { createAction, props } from '@ngrx/store';

export const AddToFavorite = createAction('[fav] addToFavorite', props<{ cardId: string }>());
export const RemoveFromFavorite = createAction('[fav] removeFromFavorite', props<{ cardId: string }>());
