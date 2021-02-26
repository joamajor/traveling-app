import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, mapTo, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = environment.api_url;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {

  }

  signup(user: User): Observable<any> {
    return this.http.post(`${this.url}/auth/register`, user);
  }

  signin(user: User): Observable<any> {
    return this.http.post(`${this.url}/auth/login`, user)
      .pipe(
        tap((res: any) => this.doSignInUser(res)),
        mapTo(true)
      )
  }

  doRefreshToken() {
    return this.http.post(`${this.url}/auth/token`, {
      token: this.getRefreshToken()
    }).pipe(
      tap((res: any) => {
        this.storeAccessToken(res.accessToken);
      })
    )
  }

  signout() {
    return this.http.delete(`${this.url}/auth/logout`)
      .pipe(
        tap(() => {
          localStorage.clear();
        })
      )
  }

  public isLoggedIn() {
    return this.getAccessToken() ? true : false;
  }

  private doSignInUser(data): any {
    this.storeUser(data.user);
    this.storeAccessToken(data.accessToken);
    this.storeRefreshToken(data.refreshToken);
  }

  private storeUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  private storeAccessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  private storeRefreshToken(token: string) {
    localStorage.setItem('refreshToken', token);
  }

  public getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  public getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  public getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }
}
