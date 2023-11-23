import { StoreModule } from '@ngrx/store';
import { AppComponent } from 'src/app/app.component';
import { CoreModule } from 'src/app/core/core.module';
import { AuthService } from 'src/app/core/services/authentification/auth.service';
import { reducers, metaReducers } from 'src/app/store';
import { AuthMainComponent } from './auth-main.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('Authorization', () => {
  let component: AuthMainComponent;
  let fixture: ComponentFixture<AuthMainComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthMainComponent, LoginFormComponent],
      imports: [
        CoreModule,
        BrowserAnimationsModule
      ],
      providers: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the login form', () => {
    const el = fixture.nativeElement.querySelector('app-login-form')
    expect(el).toBeTruthy()
  });


});
