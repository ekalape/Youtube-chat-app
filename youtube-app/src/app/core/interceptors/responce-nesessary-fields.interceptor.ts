import {
  HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IItem } from 'src/app/models/common-item.model';
import { IRawResponce, IResponce } from 'src/app/models/response.model';

@Injectable()
export class NessesaryFieldsInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<IResponce>> {
    return next.handle(request).pipe(
      map((event) => {
        if (event.type === HttpEventType.Response) {
          const resp = event.body as IRawResponce;
          if (resp.kind === 'youtube#videoListResponse') {
            const transItems: IItem[] = resp.items.map((x) => ({
              id: x.id,
              title: x.snippet.title,
              description: x.snippet.description,
              imageLinks: x.snippet.thumbnails,
              videoLink: x.snippet.channelId,
              createdAt: x.snippet.publishedAt,
              tags: x.snippet.tags,
              statistics: {
                views: x.statistics.viewCount,
                likes: x.statistics.likeCount,
                dislikes: x.statistics.dislikeCount,
                comments: x.statistics.commentCount,
              },
            }));
            return event.clone({ body: transItems });
          }
          return event;
        }
        return event;
      }),
    );
  }
}
