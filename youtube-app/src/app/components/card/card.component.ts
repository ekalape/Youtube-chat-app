import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IItem } from 'src/app/models/common-item.model';
import { TimeDistanceColor } from 'src/app/utils/enums/colors';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ColorTimeIndicatorDirective } from './directives/color-time-indicator.directive';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { IState } from 'src/app/store';
import { AddToFavorite, RemoveFromFavorite } from 'src/app/store/actions/favorites.actions';
import { Subscription, map } from 'rxjs';

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
  timeDiff = 0;

  timeDistance: TimeDistanceColor = TimeDistanceColor.NEW;

  favorite = false

  @Input() cardData: IItem | null = null;

  sub: Subscription | undefined

  constructor(private store: Store<IState>) {
  }

  ngOnInit() {
    this.sub = this.store.pipe(select(state => state.favoriteItems),
      map(items => items.some(item => item.id === this.cardData?.id)))
      .subscribe(x => this.favorite = x)

  }

  addToFavorite() {
    if (this.cardData) {
      this.store.dispatch(AddToFavorite({ card: this.cardData }))
      this.favorite = true;
    }
  }
  removeFromFavorite() {
    if (this.cardData) {
      this.store.dispatch(RemoveFromFavorite({ card: this.cardData }))
      this.favorite = false;
    }
  }

  ngOnDestroy() {
    this.sub?.unsubscribe()
  }

}
