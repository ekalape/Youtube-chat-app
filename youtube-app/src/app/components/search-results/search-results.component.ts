import { Component, Input, OnChanges } from '@angular/core';
import { IYoutubeItem } from 'src/app/models/youtube-item.model';
import { ApidataService } from 'src/app/services/apidata-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],

})
export class SearchResultsComponent implements OnChanges {
  youtubeItems: IYoutubeItem[] = [];

  @Input() searchWord = '';

  constructor(private apiDataService: ApidataService) {
  }

  ngOnChanges() {
    if (this.searchWord?.trim().length > 0) this.displayCards();
  }

  displayCards() {
    this.apiDataService.getAll().subscribe({
      next: (items: IYoutubeItem[]) => {
        this.youtubeItems = items
          .filter((x) => x.snippet.title.toLowerCase().includes(this.searchWord.toLowerCase()));
      },
    });
  }
}
