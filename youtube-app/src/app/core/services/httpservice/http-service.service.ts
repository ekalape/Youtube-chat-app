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

    return this.httpService.get<ISearchResponce>(firstRequest).pipe(
      map((item) => item.items.map((x) => x.id.videoId)),
      switchMap((ids) => {
        const secondRequest = `videos?id=${ids.join(',')}&part=snippet,statistics`;
        return this.httpService.get<IResponce>(secondRequest);
      }),
      map((res) => res.items),
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
      .pipe(map((items) => items.items[0]));
    /*   const res = this.httpService.get<IResponce>(url).pipe(map((items: IResponce) => {
        console.log('items', items)
        return items.items.find(x => x.id === itemId)
      })) */
    return res;
  }
}
