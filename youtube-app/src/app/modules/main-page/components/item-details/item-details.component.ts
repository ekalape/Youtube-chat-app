import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IYoutubeItem } from 'src/app/models/youtube-item.model';
import { ApidataService } from 'src/app/services/apidata-service.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {
  item: IYoutubeItem | undefined
  constructor(private route: ActivatedRoute, private apiService: ApidataService) {

  }

  ngOnInit() {
    const itemId = this.route.snapshot.paramMap.get('itemId');
    if (itemId) this.apiService.getById(itemId).subscribe({ next: (res) => this.item = res })

  }
}
