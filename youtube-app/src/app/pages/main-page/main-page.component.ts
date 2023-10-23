import { Component, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { IYoutubeItem } from 'src/app/models/youtube-item.model';
import { ApidataService } from 'src/app/services/apidata-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  youtubeItems: IYoutubeItem[] = [];

  constructor(private apiDataService: ApidataService) {
  }


  ngOnInit(): void {

    this.apiDataService.getAll("").subscribe({
      next: (items: IYoutubeItem[]) => {
        console.log("items", items);
        this.youtubeItems = items
      }
    })
    console.log("this.youtubeItems", this.youtubeItems);

  }

}
