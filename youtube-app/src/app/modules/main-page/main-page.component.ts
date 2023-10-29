import { ChangeDetectorRef, Component } from '@angular/core';
import { IYoutubeItem } from 'src/app/models/youtube-item.model';
import { ApidataService } from 'src/app/services/apidata-service.service';
import { ItemsManagementService } from 'src/app/services/items-management.service';
import { SortingRule } from 'src/app/utils/enums';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],

})
export class MainPageComponent {
  youtubeItems: IYoutubeItem[] = [];

  filterWord = '';

  sorting: SortingRule | null = null;

  searchWord = '';

  constructor(private apiDataService: ApidataService, private itemsManager: ItemsManagementService) {
  }

  ngOnInit() {
    this.itemsManager.currentData.subscribe(data => {
      console.log("inside subscribe ---> ", data.searchWord);
      this.filterWord = data.filterWord;
      this.searchWord = data.searchWord;
      this.sorting = data.sorting;

      if (data.searchWord?.trim().length > 0) this.displayCards(data.searchWord)
    })

    console.log("onInit main-page --->", this.searchWord);
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
