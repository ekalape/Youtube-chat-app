import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IYoutubeItem } from 'src/app/models/youtube-item.model';
import { HttpService } from 'src/app/core/services/httpservice/http-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit, OnDestroy {
  item: IYoutubeItem | undefined;
  subscription: Subscription | undefined

  constructor(private route: ActivatedRoute, private apiService: HttpService) {

  }

  ngOnInit() {
    const itemId = this.route.snapshot.paramMap.get('itemId');
    if (itemId)
      this.subscription = this.apiService.getById(itemId).subscribe({ next: (res) => (this.item = res) });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
