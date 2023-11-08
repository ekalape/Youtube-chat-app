import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SortingRule } from '../../../utils/enums/sorting-rules';

interface IFilterSortingData {
  filterWord: string;
  sorting: SortingRule | null;
  searchWord: string;
}

@Injectable({
  providedIn: 'root',
})
export class ItemsManagementService {
  private data = new BehaviorSubject<IFilterSortingData>({
    filterWord: '',
    sorting: null,
    searchWord: '',
  });

  currentData = this.data.asObservable();

  setSearchWord(value: string) {
    this.data.next({ ...this.data.value, searchWord: value });
  }

  setFilterWord(value: string) {
    this.data.next({ ...this.data.value, filterWord: value });
  }

  setSorting(value: string) {
    let sorting;
    switch (value) {
      case 'dateUp':
        sorting = SortingRule.DATE_UP;
        break;
      case 'dateDown':
        sorting = SortingRule.DATE_DOWN;
        break;
      case 'viewsUp':
        sorting = SortingRule.VIEWS_UP;
        break;
      case 'viewsDown':
        sorting = SortingRule.VIEWS_DOWN;
        break;
      default: sorting = null;
    }

    this.data.next({ ...this.data.value, sorting });
  }
}
