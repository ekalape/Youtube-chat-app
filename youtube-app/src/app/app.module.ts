import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { CustomButtonComponent } from 'src/app/components/custom-button/custom-button.component';
import { LoginInfoBlockComponent } from 'src/app/core/components/login-info-block/login-info-block.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsManagementService } from './core/services/item-management/items-management.service';
import { DevLoggerService } from './core/services/loggers/dev-logger.service';
import { YoutubeHttpInterceptor } from './core/interceptors/youtube-http.interceptor';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomButtonComponent,
    LoginInfoBlockComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatInputModule,
    MatToolbarModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NotFoundComponent,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [ItemsManagementService, DevLoggerService,
    { provide: HTTP_INTERCEPTORS, useClass: YoutubeHttpInterceptor, multi: true },
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
