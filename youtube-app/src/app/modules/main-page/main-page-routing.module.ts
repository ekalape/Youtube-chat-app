import { NgModule } from '@angular/core';
import {
  RouterModule, Routes, provideRouter, withComponentInputBinding,
} from '@angular/router';
import { CardComponent } from 'src/app/components/card/card.component';
import { MainPageComponent } from './main-page.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';

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
