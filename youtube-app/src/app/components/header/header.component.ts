import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsManagementService } from 'src/app/services/items-management.service';
import { SortingRule } from 'src/app/utils/enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {
  filtersOpened = false;
  main = false;

  sorting: string | null = null;

  constructor(private itemsManager: ItemsManagementService, private router: Router) { }

  ngOnInit() {
    console.log('first', this.router.routerState.snapshot.url)

  }

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
