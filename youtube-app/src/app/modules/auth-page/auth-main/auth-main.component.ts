import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Pathes } from 'src/app/utils/enums';

@Component({
  selector: 'app-auth-main',
  templateUrl: './auth-main.component.html',
  styleUrls: ['./auth-main.component.scss']
})
export class AuthMainComponent {


  constructor(private authService: AuthService, private router: Router) { }

  onLogin($event: Event, name: string, password: string) {
    $event.preventDefault()
    if (name.trim().length > 0 && password.trim().length > 0) {
      console.log("inside login method in auth-main");
      this.authService.login(name);
      this.router.navigate([Pathes.MAIN])
    }
  }
  onCancel(event: Event) {
    event.preventDefault()
    console.log("cancelled");
  }
}
