import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IItem } from 'src/app/models/common-item.model';
import { IState } from 'src/app/store';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  items$: Observable<IItem[]> | undefined


  constructor(private store: Store<IState>) {
  }

  ngOnInit(): void {
    this.items$ = this.store.pipe(select(x => x.favoriteItems))
  }

}
