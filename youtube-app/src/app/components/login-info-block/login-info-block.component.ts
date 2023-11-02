import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DevLoggerService } from 'src/app/services/loggers/dev-logger.service';
import { Pathes } from 'src/app/utils/enums';

@Component({
  selector: 'app-login-info-block',
  templateUrl: './login-info-block.component.html',
  styleUrls: ['./login-info-block.component.scss'],
})
export class LoginInfoBlockComponent implements OnInit {
  loggedIn = false;

  username = '';

  constructor(private authService: AuthService, private router: Router, private logService: DevLoggerService) { }

  ngOnInit() {
    this.authService.username.subscribe((name) => {
      this.username = name;
      if (name.length > 0) this.loggedIn = true;
    });
  }

  login() {
    console.log('You are logged in now');
  }

  logout() {
    this.loggedIn = false;
    this.authService.logout();
    this.router.navigate([Pathes.BASE]);
    this.logService.logMessage('You are logged out!');
  }
}
