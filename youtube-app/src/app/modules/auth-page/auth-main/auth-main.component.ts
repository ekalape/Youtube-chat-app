import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/authentification/auth.service';
import { DevLoggerService } from 'src/app/core/services/loggers/dev-logger.service';
import { Pathes } from 'src/app/utils/enums/pathes';

@Component({
  selector: 'app-auth-main',
  templateUrl: './auth-main.component.html',
  styleUrls: ['./auth-main.component.scss'],
})
export class AuthMainComponent {

  nameInput = new FormControl("")
  passInput = new FormControl("")
  valueChangesSubscription: Subscription | undefined;

  constructor(private authService: AuthService, private router: Router, private logService: DevLoggerService) { }

  ngOnInit() {
    this.valueChangesSubscription = this.nameInput.valueChanges.subscribe(v => console.log("value now ==> ", v))
  }

  onLogin($event: Event) {
    $event.preventDefault();
    if (this.nameInput.value && this.passInput.value) {
      this.authService.login(this.nameInput.value);
      this.logService.logMessage('You are logged in!');
      this.router.navigate([Pathes.MAIN]);
    }
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
