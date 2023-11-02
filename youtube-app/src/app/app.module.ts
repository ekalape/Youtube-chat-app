import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CustomButtonComponent } from 'src/app/components/custom-button/custom-button.component';
import { LoginInfoBlockComponent } from 'src/app/components/login-info-block/login-info-block.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsManagementService } from './services/items-management.service';
import { AuthService } from './services/auth.service';
import { DevLoggerService } from './services/loggers/dev-logger.service';

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
  ],
  providers: [ItemsManagementService, AuthService, DevLoggerService],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
