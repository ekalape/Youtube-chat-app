import { NgModule } from '@angular/core';
import {
  RouterModule, Routes, provideRouter, withComponentInputBinding,
} from '@angular/router';
import { ItemDetailsComponent } from '../main-page/components/item-details/item-details.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path: ':itemId', component: ItemDetailsComponent },
  { path: '', component: FavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding()),

  ],
})
export class FavoritesRoutingModule { }
