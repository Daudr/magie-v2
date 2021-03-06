import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http) { }

  authenticateUser (user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/admin/authenticate', user, {headers: headers})
      .map(res => res.json());
  }

  storeUserData (token, user) {
    localStorage.setItem('id_admin_magie', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken () {
    const token = localStorage.getItem('id_admin_magie');
    this.authToken = token;
  }

  loggedIn () {
    return tokenNotExpired('id_admin_magie');
  }

  logout () {
    this.authToken = null;
    this.user = null;
    localStorage.removeItem('id_admin_magie');
  }
}
