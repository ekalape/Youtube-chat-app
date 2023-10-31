import { Component, Input } from '@angular/core';
import { IYoutubeItem } from 'src/app/models/youtube-item.model';
import { ApidataService } from 'src/app/services/apidata-service.service';
import { ItemsManagementService } from 'src/app/services/items-management.service';
import { SortingRule } from 'src/app/utils/enums';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  youtubeItems: IYoutubeItem[] = [];
  filterWord = '';
  sorting: SortingRule | null = null;
  searchWord = '';

  itemsLength = 0

  constructor(private apiDataService: ApidataService, private itemsManager: ItemsManagementService) {
  }

  ngOnInit() {
    this.itemsManager.currentData.subscribe(data => {
      this.filterWord = data.filterWord;
      this.searchWord = data.searchWord;
      this.sorting = data.sorting;
      if (data.searchWord?.trim().length > 0) this.displayCards(data.searchWord)
    })

  }

  displayCards(value: string) {
    this.apiDataService.getAll().subscribe({
      next: (items: IYoutubeItem[]) => {
        this.youtubeItems = items
          .filter((x) => x.snippet.title.toLowerCase().includes(value.toLowerCase()));

      },
    });
  }
}
