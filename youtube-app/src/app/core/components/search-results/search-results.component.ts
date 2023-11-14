import { Component, Input } from '@angular/core';
import { IItem } from 'src/app/models/common-item.model';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {

  @Input() items: IItem[] | undefined;
  @Input() customItems?: IItem[] | undefined | null;

  len = 0;
  pageSize = 5;
  currentPage = 0;

  ngOnChanges() {
    if (this.items && this.customItems)
      this.len = (this.items?.length + this.customItems?.length)

    console.log('this.len', this.len)
  }



}
