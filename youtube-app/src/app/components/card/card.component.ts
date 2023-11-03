import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IYoutubeItem } from 'src/app/models/youtube-item.model';
import { TimeDistanceColor } from 'src/app/utils/enums/colors';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ColorTimeIndicatorDirective } from './directives/color-time-indicator.directive';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [MatButtonModule,
    MatDividerModule,
    MatCardModule, MatIconModule, ColorTimeIndicatorDirective, RouterModule],
})
export class CardComponent {
  timeDiff = 0;

  timeDistance: TimeDistanceColor = TimeDistanceColor.NEW;

  @Input() cardData: IYoutubeItem | null = null;
}
