import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _username = new BehaviorSubject<string>('');

  isLogged = false;

  username = this._username.asObservable();

  login(name: string) {
    this._username.next(name);
    this.isLogged = true;
  }

  logout() {
    this._username.next('');
    this.isLogged = false;
  }
}
