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

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { FilterCardsPipe } from './pipes/filter-cards.pipe';

import { ItemsManagementService } from 'src/app/services/items-management.service';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CustomButtonComponent } from 'src/app/components/custom-button/custom-button.component';
import { LoginInfoBlockComponent } from 'src/app/components/login-info-block/login-info-block.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

@NgModule({
  declarations: [
    MainPageComponent,
    SearchResultsComponent,
    FilterCardsPipe,
    ItemDetailsComponent

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

    CardComponent,
  ],
  providers: [],
  exports: []
})
export class MainPageModule { }
