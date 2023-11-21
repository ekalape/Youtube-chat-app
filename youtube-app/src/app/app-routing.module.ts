import { NgModule } from '@angular/core';
import {
  RouterModule, Routes,
} from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'main',
    title: 'Main page',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/main-page/main-page.module')
      .then((m) => m.MainPageModule),
  },
  {
    path: 'admin',
    title: 'Admin page',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/admin-page/admin-page.module')
      .then((m) => m.AdminPageModule),
  },
  {
    path: 'custom',
    title: 'Custom video page',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/custom/custom-page.module')
      .then((m) => m.CustomPageModule),
  },
  {
    path: 'favorites',
    title: 'Favorites video page',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/favorites/favorites.module')
      .then((m) => m.FavoritesModule),
  },

  {
    path: '',
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
