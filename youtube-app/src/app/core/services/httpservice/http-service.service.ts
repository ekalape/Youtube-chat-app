import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, mergeMap } from 'rxjs';
import { IPageTokens } from 'src/app/store/models/page-tokens.model';
import { IResponce, ISearchResponce } from '../../../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpService: HttpClient) {
  }

  getAll(pageTokens: IPageTokens, direction: string | undefined, searchValue = '') {
    const firstRequest = 'search?';
    let params = new HttpParams()
      .set('maxResults', pageTokens.pageSize)
      .set('type', 'video')
      .set('q', searchValue);
    if (direction === 'forward' && pageTokens.nextPageToken) {
      params = params.set('pageToken', pageTokens.nextPageToken);
    }
    if (direction === 'back' && pageTokens.previousPageToken) {
      params = params
        .append('pageToken', pageTokens.previousPageToken);
    }

    return this.httpService.get<ISearchResponce>(firstRequest, { params }).pipe(
      map((item) => item.items.map((x) => x.id.videoId)),
      mergeMap((ids) => {
        const secondRequest = `videos?id=${ids.join(',')}&part=snippet,statistics`;
        return this.httpService.get<IResponce>(secondRequest);
      }),

    );
  }

  getById(itemId: string) {
    const url = `videos?id=${itemId}&part=snippet,statistics`;

    return this.httpService.get<IResponce>(url);
  }
}
