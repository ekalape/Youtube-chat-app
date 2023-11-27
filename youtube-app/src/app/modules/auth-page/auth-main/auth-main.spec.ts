
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { AuthMainComponent } from './auth-main.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Authorization', () => {
  let component: AuthMainComponent;
  let fixture: ComponentFixture<AuthMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthMainComponent, LoginFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
