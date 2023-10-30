import { NgModule } from '@angular/core';
import {
  RouterModule, Routes, provideRouter, withComponentInputBinding,
} from '@angular/router';

import { AuthMainComponent } from './auth-main.component';


const routes: Routes = [
  { path: '', component: AuthMainComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding()),

  ],
})
export class AuthPageRoutingModule { }
