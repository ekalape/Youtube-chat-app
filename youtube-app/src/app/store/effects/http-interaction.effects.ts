import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpService } from './../../core/services/httpservice/http-service.service';
import { ItemsManagementService } from 'src/app/core/services/item-management/items-management.service';
import { EMPTY, catchError, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { getAllYoutubeItems, getOneItem, getOneYoutubeItem, getYoutubeItems } from '../actions/youtube-items.actions';
import { IItem } from 'src/app/models/common-item.model';
import { Store } from '@ngrx/store';
import { IState } from '..';
import { pageTokensSelector } from '../selectors/page-tokens.selector';



@Injectable()
export class HttpInteractionEffects {

  constructor(
    private actions$: Actions,
    private httpService: HttpService,
    private itemManagement: ItemsManagementService,
    private store: Store<IState>) { }

  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType(getAllYoutubeItems),
    withLatestFrom(this.store.select(pageTokensSelector), this.itemManagement.currentData.pipe(
      map(x => x.searchWord)
    )),
    mergeMap(([action, pageTokens, word]) => {

      if (word && word.length) {
        console.log('pageTokens inside effect', pageTokens)
        return this.httpService.getAll(word, pageTokens, action.direction).pipe(
          map((data: IItem[]) => getYoutubeItems({ items: data })),
          catchError((err) => {
            console.log("error", err.message)
            return EMPTY
          })
        )
      }
      else return EMPTY
    }
    )
  ))

  loadOneItem$ = createEffect(() => this.actions$.pipe(
    ofType(getOneItem),
    switchMap(action => {
      return this.httpService.getById(action.id).pipe(
        map(x => getOneYoutubeItem({ item: x })),
        catchError((err) => { console.log("error", err.message); return EMPTY })
      )
    })

  ))


}
