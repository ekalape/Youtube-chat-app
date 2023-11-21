import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsManagementService } from './core/services/item-management/items-management.service';
import { DevLoggerService } from './core/services/loggers/dev-logger.service';
import { YoutubeHttpInterceptor } from './core/interceptors/youtube-http.interceptor';
import { reducers, metaReducers } from './store';
import { CoreModule } from './core/core.module';
import { HttpInteractionEffects } from './store/effects/http-interaction.effect';
import { ResponceHttpInterceptor } from './core/interceptors/responce-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NotFoundComponent,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([HttpInteractionEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),

  ],
  providers: [ItemsManagementService, DevLoggerService,
    { provide: HTTP_INTERCEPTORS, useClass: YoutubeHttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponceHttpInterceptor, multi: true },
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
