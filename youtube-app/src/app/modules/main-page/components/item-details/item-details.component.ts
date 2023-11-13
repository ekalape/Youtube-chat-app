import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IItem } from 'src/app/models/common-item.model';
import { HttpService } from 'src/app/core/services/httpservice/http-service.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/store';
import { oneItemSelector } from 'src/app/store/selectors/items.selector';
import { oneCustomItemSelector } from 'src/app/store/selectors/custom-card.selector';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit, OnDestroy {
  item: IItem | undefined;

  subscription: Subscription | undefined;

  constructor(private route: ActivatedRoute, private apiService: HttpService, private store: Store<IState>) {

  }

  ngOnInit() {
    const itemId = this.route.snapshot.paramMap.get('itemId');
    console.log('inside detaild component', itemId);
    if (itemId) {
      try {
        this.subscription = this.store.select(oneCustomItemSelector(itemId)).subscribe(res => this.item = res)
      } catch (err) {
        console.log("error");
      }
      if (!this.item)
        this.subscription = this.store.select(oneItemSelector(itemId)).subscribe(res => this.item = res)



    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
