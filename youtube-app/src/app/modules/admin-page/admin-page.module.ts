import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AdminPageRoutingModule } from './admin-page-routing.module';
import { CreateCardFormComponent } from './components/create-card-form/create-card-form.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';

@NgModule({
  declarations: [
    AdminMainComponent,
    CreateCardFormComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    AdminPageRoutingModule,
    MatDividerModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
})
export class AdminPageModule { }
