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



@NgModule({
  declarations: [CustomButtonComponent,
    HeaderComponent,
    LoginInfoBlockComponent],
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
    HeaderComponent]
})
export class CoreModule { }
