import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthMainComponent } from 'src/app/modules/auth-page/auth-main/auth-main.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { AuthPageRoutingModule } from './auth-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';


@NgModule({
  declarations: [AuthMainComponent, LoginFormComponent],
  imports: [
    CommonModule,
    AuthPageRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class AuthPageModule { }
