import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { apienvdata } from 'youtube-api-env';

@Injectable()
export class YoutubeHttpInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const finalizedReq = request.clone(
      {
        url: `${apienvdata.baseUrl + request.url}&key=${apienvdata.apiKey}`,
      },
    );

    return next.handle(finalizedReq);
  }
}
