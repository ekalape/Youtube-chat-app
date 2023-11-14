import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpService } from './../../core/services/httpservice/http-service.service';
import { ItemsManagementService } from 'src/app/core/services/item-management/items-management.service';
import { EMPTY, catchError, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { getAllYoutubeItems, getOneItem, getOneYoutubeItem, getYoutubeItems } from '../actions/youtube-items.actions';
import { IItem } from 'src/app/models/common-item.model';



@Injectable()
export class HttpInteractionEffects {

  constructor(
    private actions$: Actions,
    private httpService: HttpService,
    private itemManagement: ItemsManagementService) { }

  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType(getAllYoutubeItems),
    withLatestFrom(this.itemManagement.currentData.pipe(
      map(x => x.searchWord)
    )),
    mergeMap(([action, word]) => {
      if (word && word.length) return this.httpService.getAll(word).pipe(
        map((data: IItem[]) => getYoutubeItems({ items: data })),
        catchError((err) => {
          console.log("error", err.message)
          return EMPTY
        })
      )
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
