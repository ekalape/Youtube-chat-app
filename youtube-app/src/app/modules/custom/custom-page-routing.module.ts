import { NgModule } from '@angular/core';
import {
  RouterModule, Routes, provideRouter, withComponentInputBinding,
} from '@angular/router';

import { CustomPageComponent } from './custom-page/custom-page.component';
import { ItemDetailsComponent } from '../main-page/components/item-details/item-details.component';

const routes: Routes = [
  { path: ':itemId', component: ItemDetailsComponent },
  { path: '', component: CustomPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding()),

  ],
})
export class CustomPageRoutingModule { }
