import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

import { environment } from "../../environments/environment";
import { AuthData } from "./auth-data.model";
import { Store } from '@ngrx/store';
import { AppAuthState } from '../store/app.states';
import { AutoLogin } from '../store/actions/auth.actions';
import { User } from '../models/user';

const BACKEND_URL = environment.apiUrl + "/user/";

@Injectable({ providedIn: "root" })
export class AuthService {
  private token: string;
  private tokenTimer: any;
  private userId: string;
  private authStatusListener = new Subject<boolean>();

  constructor(
    private http: HttpClient, 
    private router: Router,
    private store: Store<AppAuthState>,
  ) {}

  getToken() {
    return this.token;
  }

  getUserId() {
    return this.userId;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(name: string, email: string, password: string) {
    const authData: AuthData = { name: name, email: email, password: password };
    return this.http.post(BACKEND_URL + "/signup", authData)
  }

  updateUser(id: string, name: string, email: string, image: File | string) {
    let userData: User | FormData;
    if (typeof image === "object") {
      userData = new FormData();
      userData.append("id", id);
      userData.append("name", name);
      userData.append("email", email);
      userData.append("image", image, name);
    } else {
      userData = {
        id: id,
        name: name,
        email: email,
        image: image,
      };
    }
    return this.http.put(BACKEND_URL + id, userData);
  }

  login(email: string, password: string) {    
    const authData: AuthData = { email: email, password: password };
    return this.http
      .post( //<{ token: string; expiresIn: number; userId: string }>
        BACKEND_URL + "/login",
        authData
      )
  }

  changePassword(resetData) {
    return this.http.post(BACKEND_URL + "/reset", resetData);
  }

  loggedIn(response) {
    const token = response.token;
    this.token = token;
    if (token) {
      const expiresInDuration = response.expiresIn;
      this.setAuthTimer(expiresInDuration);
      this.userId = response.userId;
      this.authStatusListener.next(true);
      const now = new Date();
      const expirationDate = new Date(
        now.getTime() + expiresInDuration * 1000
      );
      this.saveAuthData(token, expirationDate, this.userId, response.name);
    }
    if (!response.edited) {
      this.router.navigate(["/"]);
    }
  }

  checkValidEmail(email: string) {
    const userData = {
      email: email
    };
    return this.http.post<{ isAlreadyExist: boolean }>(BACKEND_URL + '/check', userData)
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();    
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.store.dispatch(new AutoLogin(authInformation))
      this.userId = authInformation.userId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout() {
    this.token = null;
    this.authStatusListener.next(false);
    this.userId = null;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(["/"]);
  }

  sendEmailForRestorePass(email) {
    return this.http.post(BACKEND_URL + '/forgot', email);
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string, name?: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("userId", userId);
    localStorage.setItem("name", name);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const userId = localStorage.getItem("userId");
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");
    const image = localStorage.getItem("image");    
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId,
      email: email,
      name: name,
      image: image
    };
  }
}
