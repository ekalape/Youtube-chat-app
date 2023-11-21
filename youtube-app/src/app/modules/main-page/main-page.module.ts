import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';
import { ColorTimeIndicatorDirective } from 'src/app/components/card/directives/color-time-indicator.directive';
import { CoreModule } from 'src/app/core/core.module';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';

@NgModule({
  declarations: [
    MainPageComponent,
    ItemDetailsComponent,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    CardComponent,
    ColorTimeIndicatorDirective,
    CoreModule,
  ],
  providers: [],
  exports: [],
})
export class MainPageModule { }
