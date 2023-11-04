import { NgModule } from '@angular/core';
import {
  RouterModule, Routes, provideRouter, withComponentInputBinding,
} from '@angular/router';

import { AdminMainComponent } from './components/admin-main/admin-main.component';

const routes: Routes = [
  { path: '', component: AdminMainComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding()),

  ],
})
export class AdminPageRoutingModule { }
