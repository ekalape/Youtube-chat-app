import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ItemsManagementService } from 'src/app/core/services/item-management/items-management.service';
import {
  EMPTY, catchError, concatMap, map, mergeMap, of, switchMap, withLatestFrom,
} from 'rxjs';
import { IItem } from 'src/app/models/common-item.model';
import { Store } from '@ngrx/store';
import {
  getAllYoutubeItems, getOneItem, getOneYoutubeItem, getYoutubeItems,
} from '../actions/youtube-items.actions';
import { HttpService } from '../../core/services/httpservice/http-service.service';
import { selectPageTokens } from '../selectors/page-tokens.selector';
import { updatePageSize } from '../actions/page-tokens.actions';

@Injectable()
export class HttpInteractionEffects {
  constructor(
    private actions$: Actions,
    private httpService: HttpService,
    private itemManagement: ItemsManagementService,
    private store: Store,
  ) { }

  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType(getAllYoutubeItems),
    withLatestFrom(this.store.select(selectPageTokens), this.itemManagement.currentData.pipe(
      map((x) => x.searchWord),
    )),
    mergeMap(([action, pageTokens, word]) => {
      if (word && word.length) {
        return this.httpService.getAll(pageTokens, action.direction, word).pipe(
          map((data) => {
            if ("items" in data)
              return data.items
            else return data;
          }),
          map((data: IItem[]) => getYoutubeItems({ items: data })),
          catchError((err) => {
            console.log('error', err.message);
            return EMPTY;
          }),
        );
      }
      return EMPTY;
    }),
  ));

  loadOneItem$ = createEffect(() => this.actions$.pipe(
    ofType(getOneItem),
    switchMap((action) => this.httpService.getById(action.id).pipe(
      map(data => {
        if ("items" in data)
          return data.items[0];
        else return data[0]
      }),
      map((x) => getOneYoutubeItem({ item: x })),
      catchError((err) => { console.log('error', err.message); return EMPTY; }),
    )),
  ));

  pageSize$ = createEffect(() => this.actions$.pipe(
    ofType(updatePageSize),
    concatMap((action) => of(action).pipe(
      withLatestFrom(this.store.select(selectPageTokens).pipe(map((x) => x.pageSize))),
      map(() => getAllYoutubeItems({ direction: undefined })),
    )),
  ));
}
