import { createAction, props } from '@ngrx/store';
import { IItem } from 'src/app/models/common-item.model';

export const getAllYoutubeItems = createAction("[Youtube] Get All Youtube Items")
export const getYoutubeItems = createAction("[Youtube] Get Youtube Items", props<{ items: IItem[] }>())
