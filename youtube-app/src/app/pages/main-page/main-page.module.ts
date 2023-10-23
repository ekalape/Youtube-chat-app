import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from 'src/app/components/search-results/search-results.component';

import { CardComponent } from 'src/app/components/card/card.component';
import { FilterService } from 'src/app/services/filter-service.service';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    MainPageComponent,
    CardComponent,
    SearchResultsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonToggleModule
  ],
  providers: [FilterService],
})
export class MainPageModule { }
