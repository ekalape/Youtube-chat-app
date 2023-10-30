import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-main',
  templateUrl: './auth-main.component.html',
  styleUrls: ['./auth-main.component.scss']
})
export class AuthMainComponent {


  constructor(private authService: AuthService) { }

  onLogin($event: Event, name: string, password: string) {
    $event.preventDefault()
    if (name.trim().length > 0 && password.trim().length > 0) {
      this.authService.login(name);
      return true
    }
    return false
  }
  onCancel(event: Event) {
    event.preventDefault()
    console.log("cancelled");
  }
}
