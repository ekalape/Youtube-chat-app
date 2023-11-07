import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ComplexPasswordValidator } from 'src/app/core/directives/complex-password-validator.directive';
import { AuthService } from 'src/app/core/services/authentification/auth.service';
import { DevLoggerService } from 'src/app/core/services/loggers/dev-logger.service';
import { Pathes } from 'src/app/utils/enums/pathes';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnDestroy {

  loginForm: FormGroup = this.fb.group({
    nameInput: [""],
    emailInput: ["", [Validators.required, Validators.email]],
    passInput: ["", [Validators.required, ComplexPasswordValidator()]]
  })
  valueChangesSubscription: Subscription | undefined;

  get name() {
    return this.loginForm.get("nameInput") as FormControl
  }
  get email() {
    return this.loginForm.get("emailInput") as FormControl
  }
  get password() {
    return this.loginForm.get("passInput") as FormControl
  }

  constructor(private authService: AuthService, private router: Router, private logService: DevLoggerService, private fb: FormBuilder) { }


  onLogin() {
    if (!this.name.value.trim()) {
      this.loginForm.patchValue({ nameInput: this.email.value.match(/^(.*?)@/i)[1] });

    }

    this.authService.login(this.name?.value);
    this.logService.logMessage('You are logged in!');
    this.router.navigate([Pathes.MAIN]);
  }

  onReset(event: Event) {
    event.preventDefault();
    this.loginForm.reset()

    this.logService.logMessage("You pressed 'reset'");
  }
  ngOnDestroy() {
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
  }

}
