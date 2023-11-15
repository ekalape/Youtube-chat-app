import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddCustomCard } from 'src/app/store/actions/custom-card.actions';
import { IState } from 'src/app/store';
import { Subscription, map } from 'rxjs';
import { IItem } from 'src/app/models/common-item.model';
import { selecCustomItemsLength } from 'src/app/store/selectors/custom-card.selector';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss'],
})
export class AdminMainComponent {
  formSubmitted = false;

  customItemsLength = 0;

  indexSub: Subscription | undefined;

  constructor(private store: Store) {

  }

  submitForm(data: IItem) {
    this.addCard(data);
    this.formSubmitted = true;
  }

  addCard(data: IItem) {
    this.store.select(selecCustomItemsLength)
      .pipe(
        map((x) => this.customItemsLength = x),
      );
    data.id = (this.customItemsLength + 1).toString();
    this.store.dispatch(AddCustomCard({ card: data }));
  }
}
