import { Component, OnInit } from '@angular/core';
import { IYoutubeItem } from 'src/app/models/youtube-item.model';
import { HttpService } from 'src/app/core/services/httpservice/http-service.service';
import { ItemsManagementService } from 'src/app/core/services/item-management/items-management.service';
import { SortingRule } from 'src/app/utils/enums/sorting-rules';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  youtubeItems: Observable<IYoutubeItem[]> | undefined | null;

  filterWord = '';

  sorting: SortingRule | null = null;

  searchWord = '';

  itemsLength = 0;

  constructor(private apiDataService: HttpService, private itemsManager: ItemsManagementService) {
  }

  ngOnInit() {
    this.itemsManager.currentData.subscribe((data) => {
      this.filterWord = data.filterWord;
      this.searchWord = data.searchWord;
      this.sorting = data.sorting;
      if (data.searchWord?.trim().length) this.displayCards(data.searchWord);
    });
  }

  displayCards(value: string) {
    this.youtubeItems = this.apiDataService.getAll().pipe(map((items: IYoutubeItem[]) => {
      this.itemsLength = items.length
      return items.filter((x) => x.snippet.title.toLowerCase().includes(value.toLowerCase()))
    }))
    /* this.apiDataService.getAll().subscribe({
      next: (items: IYoutubeItem[]) => {
        this.youtubeItems = items
          .filter((x) => x.snippet.title.toLowerCase().includes(value.toLowerCase()));
      },
    }); */
  }
}
