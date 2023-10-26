import { Component } from '@angular/core';
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
  filteredItems: IYoutubeItem[] = [];

  filterWord = "";
  searchWord = "";

  constructor(private apiDataService: ApidataService) {
  }

  ngOnInit() {
    //this.displayCards("");
  }

  setSearchWord(value: string) {
    this.searchWord = value
    if (value?.trim().length > 0) this.displayCards(value);
  }

  setFilterWord(value: string) {
    if (value) {
      this.filterWord = value;
      this.filteredItems = this.youtubeItems.filter(x => x.snippet.title.toLowerCase()
        .includes(value.trim().toLowerCase()))
    }
  }

  onDateSortingChange(value: SortingRule | null) {
    if (value === SortingRule.DOWN) {
      this.filteredItems.sort((a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt))
      const ttt = this.filteredItems.map(x => Date.parse(x.snippet.publishedAt))
    }
    if (value === SortingRule.UP) {
      this.filteredItems.sort((a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt))
      const ttt = this.filteredItems.map(x => Date.parse(x.snippet.publishedAt))
    }
  }

  onViewsSortingChange(value: SortingRule | null) {
    if (value === SortingRule.DOWN) {
      this.filteredItems.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount)
    }
    if (value === SortingRule.UP) {
      this.filteredItems.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount)
    }
  }

  displayCards(value: string) {
    this.apiDataService.getAll().subscribe({
      next: (items: IYoutubeItem[]) => {
        this.youtubeItems = items
          .filter((x) => x.snippet.title.toLowerCase().includes(value.toLowerCase()));
        if (this.filterWord && this.filterWord.trim().length > 0) this.filteredItems = this.youtubeItems
          .filter(x => x.snippet.title.toLowerCase()
            .includes(this.filterWord.trim().toLowerCase()))
        else this.filteredItems = this.youtubeItems;
      },
    });
  }
}
