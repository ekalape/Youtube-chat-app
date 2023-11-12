import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from 'src/app/core/components/search-results/search-results.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ColorTimeIndicatorDirective } from 'src/app/components/card/directives/color-time-indicator.directive';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    MainPageComponent,
    ItemDetailsComponent,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    CardComponent,
    ColorTimeIndicatorDirective,
    CoreModule
  ],
  providers: [],
  exports: [],
})
export class MainPageModule { }
