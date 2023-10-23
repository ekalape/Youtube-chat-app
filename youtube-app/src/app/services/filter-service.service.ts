import { Injectable } from '@angular/core';
import { IYoutubeItem } from '../models/youtube-item.model';

@Injectable()
export class FilterService {
  items: IYoutubeItem[] = [];

  addItem() {
    console.log('Item is added!', this.items);
  }
}
