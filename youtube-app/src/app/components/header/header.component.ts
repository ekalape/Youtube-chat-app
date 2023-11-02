import {
  Component,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ItemsManagementService } from 'src/app/services/items-management.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {
  filtersOpened = false;

  main = false;

  sorting: string | null = null;

  constructor(private itemsManager: ItemsManagementService, public authService: AuthService) { }

  openFiltersBlock() {
    this.filtersOpened = !this.filtersOpened;
  }

  setSearchText(value: string) {
    this.itemsManager.setSearchWord(value);
  }

  setFilterText(value: string) {
    this.itemsManager.setFilterWord(value);
    console.log(value);
  }

  setSortingRule(value: string) {
    this.sorting = value;
    this.itemsManager.setSorting(value);
  }
}
