import {
  Component, OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  debounceTime, distinctUntilChanged, map,
} from 'rxjs';
import { AuthService } from 'src/app/core/services/authentification/auth.service';
import { ItemsManagementService } from 'src/app/core/services/item-management/items-management.service';
import { IState } from 'src/app/store';
import { getAllYoutubeItems } from 'src/app/store/actions/youtube-items.actions';
import { Pathes } from 'src/app/utils/enums/pathes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
  filtersOpened = false;

  main = false;

  sorting: string | null = null;

  searchInput = new FormControl('');

  constructor(private itemsManager: ItemsManagementService,
    public authService: AuthService,
    private router: Router,
    private store: Store<IState>) { }

  ngOnInit() {
    this.searchInput.valueChanges.pipe(
      debounceTime(800),
      map((x) => (x && x.length >= 3 ? x : '')),
      distinctUntilChanged(),
    ).subscribe((x) => this.setSearchText(x || ''));
  }

  openFiltersBlock() {
    this.filtersOpened = !this.filtersOpened;
  }

  setSearchText(value: string) {
    this.itemsManager.setSearchWord(value);
    this.store.dispatch(getAllYoutubeItems({ direction: undefined }))
  }

  setFilterText(value: string) {
    this.itemsManager.setFilterWord(value);

  }

  setSortingRule(value: string) {
    this.sorting = value;
    this.itemsManager.setSorting(value);
  }

  gotoAdmin() {
    this.router.navigate([Pathes.ADMIN]);
  }
  gotoFavourites() {
    this.router.navigate([Pathes.FAVORITES]);
  }
  gotoCustom() {
    this.router.navigate([Pathes.CUSTOM]);
  }

  gotoMainPage() {
    this.router.navigate([Pathes.MAIN]);
  }
}
