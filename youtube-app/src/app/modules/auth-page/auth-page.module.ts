import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthMainComponent } from 'src/app/modules/auth-page/auth-main/auth-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { AuthPageRoutingModule } from './auth-page-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [AuthMainComponent, LoginFormComponent],
  imports: [
    CommonModule,
    AuthPageRoutingModule,
    CoreModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class AuthPageModule { }
