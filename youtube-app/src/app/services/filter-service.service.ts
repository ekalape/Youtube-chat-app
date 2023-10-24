import { Injectable } from '@angular/core';
import { IItem } from '../utils/interfaces';

@Injectable()
export class FilterService {
  items: IItem[] = [];

  addItem() {
    console.log('Item is added!', this.items);
  }
}
