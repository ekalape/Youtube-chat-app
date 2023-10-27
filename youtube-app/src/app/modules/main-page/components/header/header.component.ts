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

  @Output() setSorting = new EventEmitter<SortingRule | null>();


  sorting: string | null = null;



  openFiltersBlock() {
    this.filtersOpened = !this.filtersOpened;
  }

  setSearchText(value: string) {
    this.setSearchWord.emit(value);
    this.sorting = null;

  }

  setFilterText(value: string) {
    this.setFilterWord.emit(value);
    console.log(value);
  }

  setSortingRule(value: string) {
    this.sorting = value;
    let sorting;
    if (value === 'dateUp') sorting = SortingRule.DATE_UP;
    else if (value === 'dateDown') sorting = SortingRule.DATE_DOWN;
    else if (value === 'viewsUp') sorting = SortingRule.VIEWS_UP;
    else sorting = SortingRule.VIEWS_DOWN;
    this.setSorting.emit(sorting);
  }

}


