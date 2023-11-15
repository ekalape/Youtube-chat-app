import {
  ChangeDetectionStrategy, Component, Input,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { IItem } from 'src/app/models/common-item.model';

import { updatePageSize } from 'src/app/store/actions/page-tokens.actions';
import { getAllYoutubeItems } from 'src/app/store/actions/youtube-items.actions';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent {
  @Input() items: IItem[] | undefined;

  @Input() customItems?: IItem[] | undefined | null;

  len = 30;

  pageSize = 20;

  currentPage = 0;

  constructor(
    private store: Store,
  ) {

  }

  onPageChange(event: PageEvent) {
    if (event.pageSize !== this.pageSize) {
      this.pageSize = event.pageSize;
      this.store.dispatch(updatePageSize({ size: this.pageSize }));
    }

    if (event.pageIndex > this.currentPage) {
      this.currentPage = event.pageIndex;
      this.store.dispatch(getAllYoutubeItems({ direction: 'forward' }));
    }
    if (event.pageIndex < this.currentPage) {
      this.currentPage = event.pageIndex;
      this.store.dispatch(getAllYoutubeItems({ direction: 'back' }));
    }
  }

  trackByFn(index: number, item: IItem) {
    return item.id;
  }
}
