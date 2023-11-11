import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/models/common-item.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IState } from 'src/app/store';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrls: ['./custom-page.component.scss']
})
export class CustomPageComponent implements OnInit {

  items: Observable<IItem[]> | undefined

  itemsLength = 0;

  constructor(private store: Store<IState>) {

  }


  ngOnInit(): void {
    this.items = this.store.pipe(select(x => x.customItems))
  }

}
