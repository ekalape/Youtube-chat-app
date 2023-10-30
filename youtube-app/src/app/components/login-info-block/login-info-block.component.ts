import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-info-block',
  templateUrl: './login-info-block.component.html',
  styleUrls: ['./login-info-block.component.scss'],
})
export class LoginInfoBlockComponent {
  loggedIn = false;
  username = ""

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.username.subscribe(name => {
      console.log('name', name)
      this.username = name;
      if (name.length > 0) this.loggedIn = true
    }
    )
  }

  login() {
    console.log('You are logged in now');
  }

  logout() {
    this.loggedIn = false;
    this.authService.logout()
    console.log('You are logged out now');
  }
}
