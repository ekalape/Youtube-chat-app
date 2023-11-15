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

import { Store } from '@ngrx/store';

import { updatePageTokens } from 'src/app/store/actions/page-tokens.actions';

@Injectable()
export class ResponceHttpInterceptor implements HttpInterceptor {
  constructor(private store: Store) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          const resp = event.body;
          if ((resp as ISearchResponce).kind === 'youtube#searchListResponse') {
            const nextToken = (resp as ISearchResponce).nextPageToken;
            const prevToken = (resp as ISearchResponce).prevPageToken;
            this.store.dispatch(updatePageTokens({ nextToken, prevToken }));
          }
        }
      }),
    );
  }
}
