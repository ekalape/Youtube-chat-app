import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddCustomCard } from 'src/app/store/actions/custom-card.actions';
import { Subscription } from 'rxjs';
import { IItem } from 'src/app/models/common-item.model';

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
    this.store.dispatch(AddCustomCard({ card: data }));
  }
}
