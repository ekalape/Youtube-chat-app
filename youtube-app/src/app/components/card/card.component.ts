import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IYoutubeItem } from 'src/app/models/youtube-item.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],

})
export class CardComponent implements OnInit {
  id: string | null = '';
  dateStatus: string = "";



  @Input() cardData: IYoutubeItem | null = null

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {


    this.id = this.route.snapshot.paramMap.get('itemId');
    this.dateStatus = "#3F51B5"
    // console.log('id', this.id);
  }
}
