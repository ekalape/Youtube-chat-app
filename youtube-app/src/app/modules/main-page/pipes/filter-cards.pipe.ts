import { Pipe, PipeTransform } from '@angular/core';
import { IItem, IYoutubeItem } from 'src/app/models/youtube-item.model';
import { SortingRule } from 'src/app/utils/enums/sorting-rules';

@Pipe({
  name: 'filterCards',

})
export class FilterCardsPipe implements PipeTransform {
  transform(cards: IItem[] | null, filterWord: string, sorting: SortingRule | null): IItem[] {
    if (!cards) return [];
    let filteredCards: IItem[];
    if (filterWord.trim() === '') filteredCards = cards;
    else { filteredCards = cards.filter((c) => c.title.toLowerCase().includes(filterWord.toLowerCase())); }

    switch (sorting) {
      case SortingRule.DATE_DOWN:
        filteredCards
          .sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt));
        break;
      case SortingRule.DATE_UP:
        filteredCards
          .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
        break;
      case SortingRule.VIEWS_DOWN:
        filteredCards
          .sort((a, b) => +a.statistics.views - +b.statistics.views);
        break;
      case SortingRule.VIEWS_UP:
        filteredCards
          .sort((a, b) => +b.statistics.views - +a.statistics.views);
        break;
      default: return filteredCards;
    }

    return filteredCards;
  }
}
