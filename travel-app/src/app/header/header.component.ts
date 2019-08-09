import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription, Observable } from "rxjs";

import { AuthService } from "../auth/auth.service";
import { AppAuthState, selectAuthState } from '../store/app.states';
import { Store } from '@ngrx/store';
import { LogOut } from '../store/actions/auth.actions';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  getState: Observable<any>;

  constructor(
    private authService: AuthService,
    private store: Store<AppAuthState>
    ) {
      this.getState = this.store.select(selectAuthState);
    }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    // this.authListenerSubs = this.authService
    //   .getAuthStatusListener()
    //   .subscribe(isAuthenticated => {
    //     this.userIsAuthenticated = isAuthenticated;
    //   });

      this.getState.subscribe((state) => {
        this.userIsAuthenticated = state.isAuthenticated;
        // this.user = state.user;
      });
  }

  onLogout() {
    this.store.dispatch(new LogOut())
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
