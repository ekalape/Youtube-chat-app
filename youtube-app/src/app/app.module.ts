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
import { MainPageModule } from './modules/main-page/main-page.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CustomButtonComponent } from 'src/app/components/custom-button/custom-button.component';
import { LoginInfoBlockComponent } from 'src/app/components/login-info-block/login-info-block.component';
import { FormsModule } from '@angular/forms';
import { ItemsManagementService } from './services/items-management.service';
import { AuthPageModule } from './modules/auth-page/auth-page.module';
import { AuthMainComponent } from './modules/auth-page/auth-main/auth-main.component';
import { AuthService } from './services/auth.service';

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
    FormsModule
  ],
  providers: [ItemsManagementService, AuthService],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
