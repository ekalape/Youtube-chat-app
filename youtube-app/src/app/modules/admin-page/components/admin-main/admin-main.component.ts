import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddCustomCard } from 'src/app/store/actions';
import { IState } from 'src/app/store';
import { Subscription } from 'rxjs';
import { IItem } from 'src/app/models/youtube-item.model';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss'],
})
export class AdminMainComponent {
  formSubmitted = false;
  customItemsLength = 0
  indexSub: Subscription | undefined

  constructor(private store: Store<IState>) {

  }
  ngOnInit() {
    this.store.subscribe(x => console.log(x))
    //const index = this.store.pipe(select((state: State) => state.custom.customItems.length));
  }

  submitForm(data: IItem) {
    console.log(data);
    this.addCard(data)
    this.formSubmitted = true;
  }

  addCard(data: IItem) {
    this.indexSub = this.store.select<number>((state: IState) => state.customItems.length).subscribe(x => this.customItemsLength = x);
    data.id = (this.customItemsLength + 1).toString()
    this.store.dispatch(AddCustomCard({ card: data }))
    console.log("dispatched");
  }

  ngOnDestroy() {
    this.indexSub?.unsubscribe()
  }
}
