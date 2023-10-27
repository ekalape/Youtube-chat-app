import { Component, Input } from '@angular/core';
import { IYoutubeItem } from 'src/app/models/youtube-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  @Input() youtubeItems: IYoutubeItem[] = [];
}
