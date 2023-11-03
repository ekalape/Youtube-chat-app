import { Pipe, PipeTransform } from '@angular/core';
import { IYoutubeItem } from 'src/app/models/youtube-item.model';

@Pipe({
  name: 'notSelected'
})
export class NotSelectedPipe implements PipeTransform {

  transform(cards: IYoutubeItem[], filterWord: string) {
    let othercards: IYoutubeItem[]
    if (filterWord.trim() === '') othercards = [];
    else { othercards = cards.filter((c) => !c.snippet.title.toLowerCase().includes(filterWord.toLowerCase())); }

    return othercards
  }

}
