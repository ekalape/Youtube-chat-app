import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { IYoutubeItem } from 'src/app/models/youtube-item.model';
import { ApidataService } from 'src/app/services/apidata-service.service';
import { SortingRule } from 'src/app/utils/enums';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],

})
export class MainPageComponent {
  youtubeItems: IYoutubeItem[] = [];

  filterWord = '';

  sorting: [string, SortingRule | null] | null = null;

  searchWord = '';

  constructor(private apiDataService: ApidataService, private cdr: ChangeDetectorRef) {
  }

  setSearchWord(value: string) {
    this.cdr.detectChanges();
    this.searchWord = value;
    if (value?.trim().length > 0) this.displayCards(value);
  }

  setFilterWord(value: string) {
    this.filterWord = value;
  }

  onDateSortingChange(value: SortingRule | null) {
    this.sorting = ["date", value];

  }

  onViewsSortingChange(value: SortingRule | null) {
    this.sorting = ["views", value];

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
