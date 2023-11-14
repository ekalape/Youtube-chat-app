import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { HttpService } from 'src/app/core/services/httpservice/http-service.service';
import { ItemsManagementService } from 'src/app/core/services/item-management/items-management.service';
import { IItem } from 'src/app/models/common-item.model';
import { IState } from 'src/app/store';
import { customItemsSelector } from 'src/app/store/selectors/custom-card.selector';
import { itemsSelector } from 'src/app/store/selectors/items.selector';
import { SortingRule } from 'src/app/utils/enums/sorting-rules';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],

})
export class MainPageComponent implements OnInit {

  youtubeItems$: Observable<IItem[]> | undefined = this.store.select(itemsSelector);
  customItems$: Observable<IItem[]> | undefined = this.store.select(customItemsSelector);
  filterWord = '';

  sub: Subscription | undefined

  sorting: SortingRule | null = null;

  searchWord = '';

  constructor(
    private itemsManager: ItemsManagementService,
    private store: Store<IState>) {
  }

  ngOnInit() {
    this.sub = this.itemsManager.currentData.subscribe((data) => {
      this.filterWord = data.filterWord;
      this.searchWord = data.searchWord;
      this.sorting = data.sorting;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe()
  }

}
