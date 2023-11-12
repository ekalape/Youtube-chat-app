import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpService } from 'src/app/core/services/httpservice/http-service.service';
import { ItemsManagementService } from 'src/app/core/services/item-management/items-management.service';
import { IItem } from 'src/app/models/common-item.model';
import { SortingRule } from 'src/app/utils/enums/sorting-rules';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],

})
export class MainPageComponent implements OnInit {


  youtubeItems: Observable<IItem[]> | undefined;

  filterWord = '';

  sorting: SortingRule | null = null;

  searchWord = '';

  constructor(private apiDataService: HttpService, private itemsManager: ItemsManagementService) {
  }

  ngOnInit() {
    this.itemsManager.currentData.subscribe((data) => {
      this.filterWord = data.filterWord;
      this.searchWord = data.searchWord;
      this.sorting = data.sorting;
      if (data.searchWord?.trim().length)
        this.youtubeItems = this.apiDataService.getAll(this.searchWord)
    });

  }

}
