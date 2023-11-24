import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IItem } from 'src/app/models/common-item.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { oneItemSelector } from 'src/app/store/selectors/items.selector';
import { oneCustomItemSelector } from 'src/app/store/selectors/custom-card.selector';
import { getOneItem } from 'src/app/store/actions/youtube-items.actions';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit, OnDestroy {
  item: IItem | undefined;

  subscription: Subscription | undefined;

  constructor(private route: ActivatedRoute, private store: Store) {

  }

  ngOnInit() {
    const itemId = this.route.snapshot.paramMap.get('itemId');

    if (itemId) {
      this.subscription = this.store.select(oneCustomItemSelector(itemId)).subscribe((res) => this.item = res)
        || this.store.select(oneItemSelector(itemId)).subscribe((res) => this.item = res);
      if (!this.item) {
        this.subscription = this.store.select(oneItemSelector(itemId)).subscribe((res) => this.item = res);
        if (!this.item) this.store.dispatch(getOneItem({ id: itemId }));
      }
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
