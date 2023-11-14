import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ISearchResponce } from 'src/app/models/response.model';
import { IState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { pageTokensSelector } from 'src/app/store/selectors/page-tokens.selector';
import { updateNextPageToken, updatePreviousPageToken } from 'src/app/store/actions/page-tokens.actions';


@Injectable()
export class ResponceHttpInterceptor implements HttpInterceptor {

  constructor(private store: Store<IState>) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          const resp = event.body;
          if ((resp as ISearchResponce).kind === "youtube#searchListResponse") {
            const nextToken = (resp as ISearchResponce).nextPageToken
            const previousToken = (resp as ISearchResponce).prevPageToken
            console.log('resp==> ', resp, "nextToken: ", nextToken, "prevToken: ", previousToken)
            this.store.dispatch(updateNextPageToken({ token: nextToken }))
            this.store.dispatch(updatePreviousPageToken({ token: previousToken }))
          }
        }
      })
    )
  }
}
