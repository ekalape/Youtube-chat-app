import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from 'src/app/models/common-item.model';

@Pipe({
  name: 'notSelected',
})
export class NotSelectedPipe implements PipeTransform {
  transform(cards: IItem[] | null, filterWord: string) {
    if (!cards) return [];
    let othercards: IItem[];
    if (filterWord.trim() === '') othercards = [];
    else { othercards = cards.filter((c) => !c.title.toLowerCase().includes(filterWord.toLowerCase())); }

    return othercards;
  }
}
