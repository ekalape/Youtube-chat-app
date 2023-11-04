import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { CreateCardFormComponent } from './components/create-card-form/create-card-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPageRoutingModule } from './admin-page-routing.module';



@NgModule({
  declarations: [
    AdminMainComponent,
    CreateCardFormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    AdminPageRoutingModule
  ]
})
export class AdminPageModule { }
