import { Component, EventEmitter, Output } from '@angular/core';
import { ItemsManagementService } from 'src/app/services/items-management.service';
import { SortingRule } from 'src/app/utils/enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {
  filtersOpened = false;

  sorting: string | null = null;

  constructor(private itemsManager: ItemsManagementService) { }

  openFiltersBlock() {
    this.filtersOpened = !this.filtersOpened;
  }

  setSearchText(value: string) {
    this.itemsManager.setSearchWord(value)
  }

  setFilterText(value: string) {
    this.itemsManager.setFilterWord(value)
    console.log(value);
  }

  setSortingRule(value: string) {
    this.sorting = value;
    this.itemsManager.setSorting(value)
  }
}
