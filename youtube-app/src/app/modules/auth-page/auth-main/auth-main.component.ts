import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-main',
  templateUrl: './auth-main.component.html',
  styleUrls: ['./auth-main.component.scss']
})
export class AuthMainComponent {


  onLogin($event: Event, email: string, password: string) {
    $event.preventDefault()
    console.log("email");
    return false
  }
  onCancel(event: Event) {
    event.preventDefault()
    console.log("cancelled");
  }
}
