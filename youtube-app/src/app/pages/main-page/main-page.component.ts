import { Component, Input, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { IYoutubeItem } from 'src/app/models/youtube-item.model';
import { ApidataService } from 'src/app/services/apidata-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {


  @Input() searchWord = ""





  setSearchWord(value: string) {
    this.searchWord = value;
  }

}
