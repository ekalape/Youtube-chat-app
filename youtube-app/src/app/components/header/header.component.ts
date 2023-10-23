import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {
  filtersOpened: boolean = false;

  @Output() setSearchText = new EventEmitter<string>()

  openFiltersBlock() {
    this.filtersOpened = !this.filtersOpened
  }
  // (click)="setSearchText.emit(searchInput.value)"

}
