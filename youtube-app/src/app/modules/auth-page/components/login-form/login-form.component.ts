import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/authentification/auth.service';
import { DevLoggerService } from 'src/app/core/services/loggers/dev-logger.service';
import { Pathes } from 'src/app/utils/enums/pathes';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  loginForm: FormGroup = this.fb.group({
    nameInput: ["", Validators.required],
    emailInput: ["", Validators.required],
    passInput: ["", Validators.required]
  })
  valueChangesSubscription: Subscription | undefined;

  get name() {
    return this.loginForm.get("nameInput") as FormControl
  }
  get email() {
    return this.loginForm.get("emailInput") as FormControl
  }
  get password() {
    return this.loginForm.get("passwordInput") as FormControl
  }

  constructor(private authService: AuthService, private router: Router, private logService: DevLoggerService, private fb: FormBuilder) { }

  ngOnInit() {
    //this.valueChangesSubscription = this.nameInput.valueChanges.subscribe(v => console.log("value now ==> ", v));

  }

  onLogin() {

    console.log('value', this.loginForm.get("nameInput")?.value)

    this.authService.login(this.loginForm.get("nameInput")?.value);
    this.logService.logMessage('You are logged in!');
    this.router.navigate([Pathes.MAIN]);

    /*  if (this.nameInput.value && this.passInput.value) {
       this.authService.login(this.nameInput.value);
       this.logService.logMessage('You are logged in!');
       this.router.navigate([Pathes.MAIN]);
     } */
  }

  onCancel(event: Event) {
    event.preventDefault();
    console.log('cancelled');
    this.logService.logMessage("You presses 'cancel'");
  }
  ngOnDestroy() {
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
  }

}
