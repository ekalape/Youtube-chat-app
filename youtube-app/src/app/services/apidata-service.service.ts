import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { IResponce } from '../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class ApidataService {
  constructor(private httpService: HttpClient) {

  }

  getAll() {
    return this.httpService.get<IResponce>('assets/mock-data/data.json').pipe(map((item) => item.items));
  }
}
