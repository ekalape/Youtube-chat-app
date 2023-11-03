import { Component } from '@angular/core';

import { IYoutubeItem } from 'src/app/models/youtube-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],

})
export class MainPageComponent {
  youtubeItems: IYoutubeItem[] = [];
}
