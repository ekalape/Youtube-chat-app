import { Pipe, PipeTransform } from '@angular/core';
import { IYoutubeItem } from 'src/app/models/youtube-item.model';
import { SortingRule } from 'src/app/utils/enums';

@Pipe({
  name: 'filterCards',

})
export class FilterCardsPipe implements PipeTransform {
  transform(cards: IYoutubeItem[], filterWord: string, sorting: SortingRule | null): IYoutubeItem[] {
    let filteredCards: IYoutubeItem[];
    if (filterWord.trim() === '') filteredCards = cards;
    else filteredCards = cards.filter((c) => c.snippet.title.toLowerCase().includes(filterWord.toLowerCase()));

    switch (sorting) {
      case SortingRule.DATE_DOWN:
        filteredCards
          .sort((a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt));
        break;
      case SortingRule.DATE_UP:
        filteredCards
          .sort((a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt));
        break;
      case SortingRule.VIEWS_DOWN:
        filteredCards
          .sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount);
        break;
      case SortingRule.VIEWS_UP:
        filteredCards
          .sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount);
        break;
      default: return filteredCards;
    }
    return filteredCards;
  }
}
