import { NgModule } from '@angular/core';
import {
  RouterModule, Routes,
} from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'main',
    title: 'Main page',
    //canActivate: [authGuard],
    loadChildren: () => import('./modules/main-page/main-page.module')
      .then((m) => m.MainPageModule),
  },
  {
    path: '',
    title: 'Admin page',
    //canActivate: [authGuard],
    loadChildren: () => import('./modules/admin-page/admin-page.module')
      .then((m) => m.AdminPageModule),
  },

  {
    path: 'temp',

    title: 'Authorization page',
    pathMatch: 'full',

    loadChildren: () => import('./modules/auth-page/auth-page.module')
      .then((m) => m.AuthPageModule),
  },
  {
    path: '**',
    title: 'Not found page',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
