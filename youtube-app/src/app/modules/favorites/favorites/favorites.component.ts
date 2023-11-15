import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IItem } from 'src/app/models/common-item.model';
import { selectFavoriteItems } from 'src/app/store/selectors/items.selector';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  items$: Observable<IItem[]> | undefined;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.items$ = this.store.select(selectFavoriteItems);
  }
}
