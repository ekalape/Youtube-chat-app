import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, switchMap } from 'rxjs';
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
      switchMap((ids) => {
        const secondRequest = `videos?id=${ids.join(',')}&part=snippet,statistics`;
        return this.httpService.get<IResponce>(secondRequest);
      })/* ,
      map((res) => res.items.map((x) => ({
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
      }))), */

    );
  }

  getById(itemId: string) {
    const url = `videos?id=${itemId}&part=snippet,statistics`;

    const res = this.httpService.get<IResponce>(url)
    /* .pipe(map((items) => ({
      id: items.items[0].id,
      title: items.items[0].snippet.title,
      description: items.items[0].snippet.description,
      imageLinks: items.items[0].snippet.thumbnails,
      videoLink: items.items[0].snippet.channelId,
      createdAt: items.items[0].snippet.publishedAt,
      tags: items.items[0].snippet.tags,
      statistics: {
        views: items.items[0].statistics.viewCount,
        likes: items.items[0].statistics.likeCount,
        dislikes: items.items[0].statistics.dislikeCount,
        comments: items.items[0].statistics.commentCount,
      },
    }))); */

    return res;
  }
}
