import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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


}
