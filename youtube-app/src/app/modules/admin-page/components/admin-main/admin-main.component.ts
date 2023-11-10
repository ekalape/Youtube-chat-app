import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { AddCustomCard } from 'src/app/store/actions';
import { State } from 'src/app/store';
import { ICustomCard } from 'src/app/store/entities/custom-card.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss'],
})
export class AdminMainComponent {
  formSubmitted = false;
  customItemsLength = 0
  indexSub: Subscription | undefined

  constructor(private store: Store<State>) {

  }
  ngOnInit() {
    this.store.subscribe(x => console.log(x))
    //const index = this.store.pipe(select((state: State) => state.custom.customItems.length));
  }

  submitForm(data: ICustomCard) {
    console.log(data);
    this.addCard(data)
    this.formSubmitted = true;
  }

  addCard(data: ICustomCard) {
    this.indexSub = this.store.select<number>((state: State) => state.custom.customItems.length).subscribe(x => this.customItemsLength = x);
    data.id = this.customItemsLength + 1
    this.store.dispatch(AddCustomCard({ card: data }))
    console.log("dispatched");
    //this.store.subscribe(x => console.log(x))

  }

  ngOnDestroy() {
    this.indexSub?.unsubscribe()
  }
}
