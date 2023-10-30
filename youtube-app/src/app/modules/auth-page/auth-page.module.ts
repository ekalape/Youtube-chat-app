import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthMainComponent } from 'src/app/modules/auth-page/auth-main/auth-main.component';
import { AuthPageRoutingModule } from './auth-main/auth-page-routing.module';



@NgModule({
  declarations: [AuthMainComponent],
  imports: [
    CommonModule,
    AuthPageRoutingModule
  ]
})
export class AuthPageModule { }
