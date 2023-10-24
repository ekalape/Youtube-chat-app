import { NgModule } from '@angular/core';
import {
  RouterModule, Routes,
} from '@angular/router';

const routes: Routes = [{ path: '', title: 'Main page', loadChildren: () => import('./pages/main-page/main-page.module').then((m) => m.MainPageModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
