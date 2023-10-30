import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _loggedIn = new BehaviorSubject<boolean>(false);
  private _username = new BehaviorSubject<string>("")

  loggedIn = this._loggedIn.asObservable()
  username = this._username.asObservable()


  constructor() { }

  login(name: string) {
    this._loggedIn.next(true);
    this._username.next(name);
    console.log("service name", this._username.value);
  }
  logout() {
    this._loggedIn.next(false);
    this._username.next("");
  }
}
