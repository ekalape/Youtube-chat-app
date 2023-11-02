import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/authentification/auth.service';
import { DevLoggerService } from 'src/app/core/services/loggers/dev-logger.service';
import { Pathes } from 'src/app/utils/enums';

@Component({
  selector: 'app-auth-main',
  templateUrl: './auth-main.component.html',
  styleUrls: ['./auth-main.component.scss'],
})
export class AuthMainComponent {
  constructor(private authService: AuthService, private router: Router, private logService: DevLoggerService) { }

  onLogin($event: Event, name: string, password: string) {
    $event.preventDefault();
    if (name.trim().length > 0 && password.trim().length > 0) {
      this.authService.login(name);
      this.logService.logMessage('You are logged in!');
      this.router.navigate([Pathes.MAIN]);
    }
  }

  onCancel(event: Event) {
    event.preventDefault();
    console.log('cancelled');
    this.logService.logMessage("You presses 'cancel'");
  }
}
