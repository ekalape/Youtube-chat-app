import { Injectable } from '@angular/core';
import { IYoutubeItem } from '../models/youtube-item.model';
import { SortingRule } from '../utils/enums';
import { BehaviorSubject } from 'rxjs';

interface IFilterSortingData {
  filterWord: string;
  sorting: SortingRule | null;
  searchWord: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemsManagementService {

  private data = new BehaviorSubject<IFilterSortingData>({
    filterWord: '',
    sorting: null,
    searchWord: ''
  })

  currentData = this.data.asObservable()

  setSearchWord(value: string) {
    this.data.next({ ...this.data.value, searchWord: value })
  }
  setFilterWord(value: string) {
    this.data.next({ ...this.data.value, filterWord: value })
  }
  setSorting(value: string) {
    let sorting;
    if (value === 'dateUp') sorting = SortingRule.DATE_UP;
    else if (value === 'dateDown') sorting = SortingRule.DATE_DOWN;
    else if (value === 'viewsUp') sorting = SortingRule.VIEWS_UP;
    else sorting = SortingRule.VIEWS_DOWN;
    this.data.next({ ...this.data.value, sorting })
  }

}
