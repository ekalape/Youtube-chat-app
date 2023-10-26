import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IYoutubeItem } from 'src/app/models/youtube-item.model';
import { TimeDistanceColor } from 'src/app/utils/enums';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [MatButtonModule,
    MatDividerModule,
    MatCardModule, MatIconModule,]
})
export class CardComponent implements OnInit {
  id: string | null = '';

  timeDiff = 0;

  timeDistance: TimeDistanceColor = TimeDistanceColor.NEW;

  @Input() cardData: IYoutubeItem | null = null;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('itemId');
    const published = this.cardData?.snippet.publishedAt;
    if (published) {
      this.timeDiff = (Date.now() - Date.parse(published)) / 1000;
    }

    if (this.timeDiff < 604800) this.timeDistance = TimeDistanceColor.NEW;
    else if (this.timeDiff >= 604800 && this.timeDiff < 2592000) this.timeDistance = TimeDistanceColor.MEDIUM;
    else if (this.timeDiff >= 2592000 && this.timeDiff < 15552000) this.timeDistance = TimeDistanceColor.OLD;
    else this.timeDistance = TimeDistanceColor.OLDIEST;
  }
}
