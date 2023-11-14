import { Component, Input, OnChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { IItem } from 'src/app/models/common-item.model';
import { IState } from 'src/app/store';
import { updatePageSize } from 'src/app/store/actions/page-tokens.actions';
import { getAllYoutubeItems } from 'src/app/store/actions/youtube-items.actions';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {

  @Input() items: IItem[] | undefined;
  @Input() customItems?: IItem[] | undefined | null;

  len = 20;
  pageSize = 5;
  currentPage = 0;

  constructor(private store: Store<IState>) {

  }


  onPageChange(event: PageEvent) {
    if (event.pageSize !== this.pageSize) {
      this.pageSize = event.pageSize;
      this.store.dispatch(updatePageSize({ size: this.pageSize }))
    }



    if (event.pageIndex > this.currentPage) {
      this.currentPage = event.pageIndex;
      this.store.dispatch(getAllYoutubeItems({ direction: "forward" }))
    }
    if (event.pageIndex < this.currentPage) {
      this.currentPage = event.pageIndex;
      this.store.dispatch(getAllYoutubeItems({ direction: "back" }))
    }




  }


}
