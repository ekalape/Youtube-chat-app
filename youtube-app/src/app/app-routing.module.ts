import { NgModule } from '@angular/core';
import {
  RouterModule, Routes,
} from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [

  {
    path: 'main',
    title: 'Main page',
    loadChildren: () => import('./modules/main-page/main-page.module')
      .then((m) => m.MainPageModule),
  },
  {
    path: '',
    title: 'Authorization page',
    pathMatch: "full",
    loadChildren: () => import('./modules/auth-page/auth-page.module')
      .then((m) => m.AuthPageModule),
  },
  {
    path: "**",
    title: "Not found page",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
