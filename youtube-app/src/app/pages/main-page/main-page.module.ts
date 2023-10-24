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

@NgModule({
  declarations: [
    MainPageComponent,
    CardComponent,
    SearchResultsComponent,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [FilterService],
})
export class MainPageModule { }
