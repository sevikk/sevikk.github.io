import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AuthService } from "./auth.service";
import { Store } from '@ngrx/store';
import { AppAuthState, selectAuthState } from '../store/app.states';

@Injectable()
export class AuthGuard implements CanActivate {
  getState: Observable<any>;
  isAuth: boolean;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private store: Store<AppAuthState>
    ) {
      this.getState = this.store.select(selectAuthState);
    }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    // const isAuth = this.authService.getIsAuth();
    this.getState.subscribe((state) => {
      this.isAuth = state.isAuthenticated;
      // this.user = state.user;
    });
    if (!this.isAuth) {
      this.router.navigate(['/login']);
    }
    return this.isAuth;
  }
}
