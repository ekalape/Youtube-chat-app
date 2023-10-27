import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-info-block',
  templateUrl: './login-info-block.component.html',
  styleUrls: ['./login-info-block.component.scss']
})
export class LoginInfoBlockComponent {
  @Input() loggedIn: boolean = false


  login() {
    this.loggedIn = true;
    console.log("You are logged in now");
  }

  logout() {
    this.loggedIn = false;
    console.log("You are logged out now");
  }

}
