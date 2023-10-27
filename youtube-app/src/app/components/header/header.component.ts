import { Component, EventEmitter, Output } from '@angular/core';
import { SortingRule } from 'src/app/utils/enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {
  filtersOpened = false;

  @Output() setSearchWord = new EventEmitter<string>();

  @Output() setFilterWord = new EventEmitter<string>();

  @Output() setDateSorting = new EventEmitter<SortingRule | null>();

  @Output() setViewsSorting = new EventEmitter<SortingRule | null>();

  dateSorting: string | null = null;

  viewsSorting: string | null = null;

  openFiltersBlock() {
    this.filtersOpened = !this.filtersOpened;
  }

  setSearchText(value: string) {
    this.setSearchWord.emit(value);
    this.dateSorting = null;
    this.viewsSorting = null;
  }

  setFilterText(value: string) {
    this.setFilterWord.emit(value);
    console.log(value);
  }

  setDateSortingRule(value: string) {
    this.dateSorting = value;
    let sorting;
    if (value === 'dateUp') sorting = SortingRule.UP;
    else sorting = SortingRule.DOWN;
    this.setDateSorting.emit(sorting);
  }

  setViewsSortingRule(value: string) {
    this.viewsSorting = value;
    let sorting;
    if (value === 'viewsUp') sorting = SortingRule.UP;
    else sorting = SortingRule.DOWN;
    this.setViewsSorting.emit(sorting);
  }
}

//* ngIf="filtersOpened"
