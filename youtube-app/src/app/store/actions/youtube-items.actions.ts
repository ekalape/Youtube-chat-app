import { createAction, props } from '@ngrx/store';
import { IItem } from 'src/app/models/common-item.model';

export const getAllYoutubeItems = createAction("[Youtube] Get All Youtube Items")
export const getYoutubeItems = createAction("[Youtube] Get Youtube Items", props<{ items: IItem[] }>())

export const getOneItem = createAction("[Youtube] Get One Item", props<{ id: string }>())
export const getOneYoutubeItem = createAction("[Youtube] Get One Youtube Item", props<{ item: IItem }>())
