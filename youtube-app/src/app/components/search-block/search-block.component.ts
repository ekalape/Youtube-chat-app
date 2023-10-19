import { Component } from '@angular/core';

import { FilterService } from 'src/app/models/filter-service.service';

@Component({
  selector: 'app-search-block',
  templateUrl: './search-block.component.html',
  styleUrls: ['./search-block.component.scss'],

})
export class SearchBlockComponent {

  constructor(private filterService: FilterService) { }



}
