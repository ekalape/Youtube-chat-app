import { Component, Input, OnInit } from '@angular/core';
import { IYoutubeItem } from 'src/app/models/youtube-item.model';
import { ApidataService } from 'src/app/services/apidata-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],

})
export class SearchResultsComponent {
  youtubeItems: IYoutubeItem[] = [];
  @Input() searchWord = ""

  constructor(private apiDataService: ApidataService) {

  }

  ngOnInit(): void {


  }

  ngOnChanges() {
    if (this.searchWord?.trim().length > 0)
      this.displayCards()
  }

  displayCards() {
    this.apiDataService.getAll(this.searchWord).subscribe({
      next: (items: IYoutubeItem[]) => {
        console.log("items", items);
        this.youtubeItems = items
      }
    })
    console.log("this.youtubeItems", this.youtubeItems);
  }




}
