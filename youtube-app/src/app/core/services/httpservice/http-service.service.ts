import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs';
import { IResponce, ISearchResponce } from '../../../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpService: HttpClient) {
  }

  getAll(searchValue = '') {
    const firstRequest = `search?maxResults=10&q=${searchValue}`;
    console.log("inside service");
    return this.httpService.get<ISearchResponce>(firstRequest).pipe(
      map((item) => item.items.map((x) => x.id.videoId)),
      switchMap((ids) => {
        const secondRequest = `videos?id=${ids.join(',')}&part=snippet,statistics`;
        return this.httpService.get<IResponce>(secondRequest);
      }),
      map((res) => res.items.map(x => ({
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
          comments: x.statistics.commentCount
        }
      }))),

    );

    /*     return this.httpService.get<IResponce>("assets/mock-data/data.json").pipe(map((items: IResponce) => {
          console.log('items', items)
          return items.items.filter(x => x.snippet.title.toLowerCase().includes(searchValue.toLowerCase()))
        })) */
  }

  getById(itemId: string) {
    const url = `videos?id=${itemId}&part=snippet,statistics`;
    // const url = "assets/mock-data/data.json"

    const res = this.httpService.get<IResponce>(url)
      // .pipe(map((items) => items.items[0]));
      .pipe(map((items) => ({
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
          comments: items.items[0].statistics.commentCount
        }
      })));
    /*   const res = this.httpService.get<IResponce>(url).pipe(map((items: IResponce) => {
        console.log('items', items)
        return items.items.find(x => x.id === itemId)
      })) */
    return res;
  }
}
