import { Component, OnDestroy, OnInit } from '@angular/core';
import { IItem, IYoutubeItem } from 'src/app/models/youtube-item.model';
import { HttpService } from 'src/app/core/services/httpservice/http-service.service';
import { ItemsManagementService } from 'src/app/core/services/item-management/items-management.service';
import { SortingRule } from 'src/app/utils/enums/sorting-rules';
import {
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  youtubeItems: IItem[] = [];

  subscription: Subscription | undefined;

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
    this.subscription = this.apiDataService.getAll(value).subscribe({
      next: (items: IItem[]) => {
        this.youtubeItems = items;
        this.itemsLength = items.length;
      },
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
