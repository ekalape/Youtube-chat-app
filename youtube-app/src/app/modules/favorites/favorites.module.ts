import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites/favorites.component';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    CoreModule
  ]
})
export class FavoritesModule { }
