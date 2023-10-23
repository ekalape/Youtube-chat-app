import { Injectable } from '@angular/core';
import { IYoutubeItem } from '../models/youtube-item.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IResponce } from '../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class ApidataService {

  constructor(private httpService: HttpClient) {

  }

  getAll(searchword: string) {
    console.log("searchword --> ", searchword);
    return this.httpService.get<IResponce>('assets/mock-data/data.json', { params: { fromString: `title=${searchword}` } }).pipe(map(item => item.items))


  }



}
