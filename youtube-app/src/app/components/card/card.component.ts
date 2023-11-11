import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IItem } from 'src/app/models/common-item.model';
import { TimeDistanceColor } from 'src/app/utils/enums/colors';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ColorTimeIndicatorDirective } from './directives/color-time-indicator.directive';
import { CommonModule } from '@angular/common';

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
export class CardComponent {
  timeDiff = 0;

  timeDistance: TimeDistanceColor = TimeDistanceColor.NEW;

  favorite = false

  @Input() cardData: IItem | null = null;

  addToFavorite() {
    this.favorite = true;
  }
  removeFromFavorite() {
    this.favorite = false;
  }

}
