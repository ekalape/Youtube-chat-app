import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, map, switchMap, tap } from 'rxjs';
import { IResponce, ISearchResponce } from '../../../models/response.model';
import { apienvdata } from 'youtube-api-env';
import { IYoutubeItem } from 'src/app/models/youtube-item.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {



  constructor(private httpService: HttpClient) {

  }

  getAll(searchValue: string = "") {
    const firstRequest = `${apienvdata.baseUrl}search?key=${apienvdata.apiKey}&maxResults=25&q=${searchValue}`

    return this.httpService.get<ISearchResponce>(firstRequest).pipe(
      map((item) => item.items.map(x => x.id.videoId)),
      switchMap((ids) => {
        const secondRequest = `${apienvdata.baseUrl}videos?key=${apienvdata.apiKey}&id=${ids.join(",")}&part=snippet,statistics`;
        return this.httpService.get<IResponce>(secondRequest)
      }),
      map(res => res.items)
    )

  }

  getById(itemId: string) {
    //return this.getAll().pipe(map((items) => items.find((item) => item.id === itemId)));
    return this.httpService.get<IResponce>(`${apienvdata.baseUrl}videos?key=${apienvdata.apiKey}&id=${itemId}&part=snippet,statistics`).pipe(map((items) => items.items[0]))
  }
}
