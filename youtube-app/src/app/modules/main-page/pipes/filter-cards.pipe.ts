import { Pipe, PipeTransform } from '@angular/core';
import { IYoutubeItem } from 'src/app/models/youtube-item.model';
import { SortingRule } from 'src/app/utils/enums';

@Pipe({
  name: 'filterCards',

})
export class FilterCardsPipe implements PipeTransform {

  transform(cards: IYoutubeItem[], filterWord: string, sorting: [string, SortingRule | null] | null
  ): IYoutubeItem[] {
    let filteredCards: IYoutubeItem[];
    if (filterWord.trim() === "") filteredCards = cards
    else filteredCards = cards.filter(c => c.snippet.title.toLowerCase().includes(filterWord.toLowerCase()));
    if (sorting) {
      if (sorting[0] === "date" && sorting[1] === SortingRule.DOWN) filteredCards = filteredCards.sort((a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt));
      else if (sorting[0] === "date" && sorting[1] === SortingRule.UP) filteredCards = filteredCards.sort((a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt));

      else if (sorting[0] === "views" && sorting[1] === SortingRule.DOWN) filteredCards = filteredCards.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount);
      else if (sorting[0] === "views" && sorting[1] === SortingRule.UP) filteredCards = filteredCards.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount);
    }

    return filteredCards
  }

}
