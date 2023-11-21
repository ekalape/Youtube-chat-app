import { StoreModule } from '@ngrx/store';
import { AppComponent } from 'src/app/app.component';
import { CoreModule } from 'src/app/core/core.module';
import { AuthService } from 'src/app/core/services/authentification/auth.service';


import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { LoginFormComponent } from './login-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('Authorization', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  let submitBtn: HTMLButtonElement;
  let nameField: HTMLInputElement;
  let emailField: HTMLInputElement;
  let passField: HTMLInputElement;

  let correctLoginData = {
    name: "TestName",
    email: "test@test.com",
    password: "11ffFF!!"
  }
  let incorrectLoginData = {
    email: "test",
    emptyPassword: "",
    incorrectPassword: "fF!"
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [
        CoreModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ],
      providers: [AuthService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    submitBtn = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement as HTMLButtonElement;
    nameField = fixture.debugElement.query(By.css('input[placeholder="Name"]')).nativeElement;
    emailField = fixture.debugElement.query(By.css('input[placeholder="E-mail"]')).nativeElement;
    passField = fixture.debugElement.query(By.css('input[placeholder="Password"]')).nativeElement;

  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the login form', () => {
    const el = fixture.nativeElement.querySelector('.form-content')
    expect(el).toBeTruthy()
  });

  it('should not show any errors if all inputs are correct', () => {
    nameField.value = correctLoginData.name;
    emailField.value = correctLoginData.email;
    passField.value = correctLoginData.password;
    [nameField, emailField, passField].forEach(x => x.dispatchEvent(new Event('input')))
    fixture.detectChanges();

    const errors = fixture.debugElement.queryAll(By.css(".errors-message"))

    expect(errors.length).toBe(0)
    expect(component.loginForm.status).toBe("VALID")
    expect(submitBtn.disabled).toBe(false)

  });

  it('should show 6 errors if password is empty', () => {
    nameField.value = correctLoginData.name;
    emailField.value = correctLoginData.email;
    passField.value = incorrectLoginData.emptyPassword;
    [nameField, emailField, passField].forEach(x => x.dispatchEvent(new Event('input')))
    fixture.detectChanges();
    const errors = fixture.debugElement.queryAll(By.css(".errors-message"))
    console.log('errors', errors.length)
    expect(errors.length).toBe(6)
    expect(component.loginForm.status).toBe("INVALID")
    expect(submitBtn.disabled).toBe(true)
  });

  it('should show 3 errors if email o password are not correct', () => {
    nameField.value = correctLoginData.name;
    emailField.value = incorrectLoginData.email;
    passField.value = incorrectLoginData.incorrectPassword;
    [nameField, emailField, passField].forEach(x => x.dispatchEvent(new Event('input')))
    fixture.detectChanges();

    const errors = fixture.debugElement.queryAll(By.css(".errors-message"))
    console.log('errors', errors.length)
    expect(errors.length).toBe(3)
    expect(component.loginForm.status).toBe("INVALID")
    expect(submitBtn.disabled).toBe(true)
  });

});
