import {
  Component, Input, OnDestroy, OnInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { IItem } from 'src/app/models/common-item.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AddToFavorite, RemoveFromFavorite } from 'src/app/store/actions/favorites.actions';
import {
  Observable, Subscription, map,
} from 'rxjs';
import { selectFavoriteItems } from 'src/app/store/selectors/items.selector';
import { DeleteCustomCard } from 'src/app/store/actions/custom-card.actions';
import { oneCustomItemSelector } from 'src/app/store/selectors/custom-card.selector';
import { ColorTimeIndicatorDirective } from './directives/color-time-indicator.directive';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [MatButtonModule,
    MatDividerModule,
    CommonModule,
    MatCardModule, MatIconModule, ColorTimeIndicatorDirective, RouterModule],
})
export class CardComponent implements OnInit, OnDestroy {
  favorite = false;

  @Input() cardData: IItem | null = null;

  sub: Subscription | undefined;

  custom$: Observable<IItem | undefined> | undefined;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.sub = this.store.select(selectFavoriteItems).pipe(
      map((items) => items.some((item) => item.id === this.cardData?.id)),
    ).subscribe((x) => this.favorite = x);

    this.custom$ = this.store.select(oneCustomItemSelector(this.cardData?.id));
  }

  addToFavorite() {
    if (this.cardData) {
      this.store.dispatch(AddToFavorite({ cardId: this.cardData.id }));
      this.favorite = true;
    }
  }

  deleteCustomCard() {
    if (this.cardData) this.store.dispatch(DeleteCustomCard({ id: this.cardData.id }));
  }

  removeFromFavorite() {
    if (this.cardData) {
      this.store.dispatch(RemoveFromFavorite({ cardId: this.cardData.id }));
      this.favorite = false;
    }
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
