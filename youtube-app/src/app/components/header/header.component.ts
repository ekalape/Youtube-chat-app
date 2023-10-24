import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {
  filtersOpened = false;

  @Output() setSearchWord = new EventEmitter<string>();

  openFiltersBlock() {
    this.filtersOpened = !this.filtersOpened;
  }

  setSearchText(value: string) {
    this.setSearchWord.emit(value);
  }
}
