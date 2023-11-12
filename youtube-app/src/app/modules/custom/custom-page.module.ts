import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPageComponent } from './custom-page/custom-page.component';

import { CardComponent } from 'src/app/components/card/card.component';
import { CustomPageRoutingModule } from './custom-page-routing.module';
import { CoreModule } from 'src/app/core/core.module';




@NgModule({
  declarations: [
    CustomPageComponent,
  ],
  imports: [
    CommonModule,
    CardComponent,
    CustomPageRoutingModule,
    CoreModule
  ]
})
export class CustomPageModule {


}
