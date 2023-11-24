import { CoreModule } from 'src/app/core/core.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { AuthMainComponent } from './auth-main.component';

describe('Authorization', () => {
  let component: AuthMainComponent;
  let fixture: ComponentFixture<AuthMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthMainComponent, LoginFormComponent],
      imports: [
        CoreModule,
        BrowserAnimationsModule,
      ],
      providers: [],
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
    const el = fixture.nativeElement.querySelector('app-login-form');
    expect(el).toBeTruthy();
  });
});
