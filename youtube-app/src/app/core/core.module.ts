import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { CustomButtonComponent } from '../components/custom-button/custom-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { LoginInfoBlockComponent } from './components/login-info-block/login-info-block.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { FilterCardsPipe } from '../modules/main-page/pipes/filter-cards.pipe';
import { NotSelectedPipe } from '../modules/main-page/pipes/not-selected.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchResultsComponent } from './components/search-results/search-results.component';



@NgModule({
  declarations: [CustomButtonComponent,
    HeaderComponent,
    LoginInfoBlockComponent,
    FilterCardsPipe,
    NotSelectedPipe,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    CardComponent,
    MatButtonToggleModule,
    MatDividerModule,
    MatMenuModule,
    MatInputModule,
    MatToolbarModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  exports: [CommonModule,
    CardComponent,
    MatButtonToggleModule,
    MatDividerModule,
    MatMenuModule,
    MatInputModule,
    MatToolbarModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    FilterCardsPipe,
    NotSelectedPipe,
    MatCardModule,
    MatFormFieldModule,
    SearchResultsComponent]
})
export class CoreModule { }
