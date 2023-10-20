import { NgModule } from '@angular/core';
import {
  RouterModule, Routes, provideRouter, withComponentInputBinding,
} from '@angular/router';
import { CardComponent } from 'src/app/components/card/card.component';
import { MainPageComponent } from './main-page.component';


const routes: Routes = [{ path: '', component: MainPageComponent },
{ path: ':itemId', title: 'Details', component: CardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding()),
  ],
})
export class MainPageRoutingModule { }
