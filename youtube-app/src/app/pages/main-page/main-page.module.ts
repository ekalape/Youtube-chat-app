import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from 'src/app/components/search-results/search-results.component';
import { SearchBlockComponent } from 'src/app/components/search-block/search-block.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { FilterService } from 'src/app/models/filter-service.service';

@NgModule({
  declarations: [
    MainPageComponent,
    CardComponent,
    SearchBlockComponent,
    SearchResultsComponent,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [FilterService]
})
export class MainPageModule { }
