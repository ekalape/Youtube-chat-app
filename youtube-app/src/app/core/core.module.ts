import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HeaderComponent } from './components/header/header.component';
import { LoginInfoBlockComponent } from './components/login-info-block/login-info-block.component';
import { FilterCardsPipe } from '../modules/main-page/pipes/filter-cards.pipe';
import { NotSelectedPipe } from '../modules/main-page/pipes/not-selected.pipe';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CustomButtonComponent } from '../components/custom-button/custom-button.component';
import { CardComponent } from '../components/card/card.component';

@NgModule({
  declarations: [CustomButtonComponent,
    HeaderComponent,
    LoginInfoBlockComponent,
    FilterCardsPipe,
    NotSelectedPipe,
    SearchResultsComponent,
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
    MatPaginatorModule,
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
    SearchResultsComponent,
    MatPaginatorModule,
  ],
  providers: [/* {
      provide:  MatPaginatorIntl,
      useClass:MyCustom
    } */],
})
export class CoreModule { }
