import { NgModule } from '@angular/core';
import {
  RouterModule, Routes, provideRouter, withComponentInputBinding,
} from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

const routes: Routes = [
  { path: ':itemId', component: ItemDetailsComponent },
  { path: '', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding()),

  ],
})
export class MainPageRoutingModule { }
