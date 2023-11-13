import { Component, Input } from '@angular/core';
import { IItem } from 'src/app/models/common-item.model';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {

  @Input() items: IItem[] | undefined;
  @Input() customItems?: IItem[] | undefined | null;


}
