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
import { HeaderComponent } from 'src/app/modules/main-page/components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { FilterCardsPipe } from './pipes/filter-cards.pipe';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import { LoginInfoBlockComponent } from '../../components/login-info-block/login-info-block.component';

@NgModule({
  declarations: [
    MainPageComponent,
    SearchResultsComponent,
    HeaderComponent,
    FilterCardsPipe,
    LoginInfoBlockComponent,
    CustomButtonComponent,
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
    MatButtonToggleModule,
    CardComponent,
  ],
  providers: [],
})
export class MainPageModule { }
