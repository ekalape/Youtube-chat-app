import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from 'src/app/modules/main-page/components/search-results/search-results.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ColorTimeIndicatorDirective } from 'src/app/components/card/directives/color-time-indicator.directive';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { FilterCardsPipe } from './pipes/filter-cards.pipe';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';

@NgModule({
  declarations: [
    MainPageComponent,
    SearchResultsComponent,
    FilterCardsPipe,
    ItemDetailsComponent,

  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    CardComponent,
    ColorTimeIndicatorDirective,
  ],
  providers: [],
  exports: [],
})
export class MainPageModule { }
