import { Component, OnInit, } from "@angular/core";
// import { Subscription } from "rxjs";

import { AuthService } from "./auth/auth.service";
import { AppAuthState } from './store/app.states';
import { Store } from '@ngrx/store';
import { AutoLogin } from './store/actions/auth.actions';
// import { ErrorService } from "./error/error.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  // hasError = false;
  // private errorSub: Subscription;

  constructor(
    private authService: AuthService,
    private store: Store<AppAuthState>
    // private errorService: ErrorService
  ) {}

  ngOnInit() {
    // this.store.dispatch(new AutoLogin())
    this.authService.autoAuthUser();
    // this.errorSub = this.errorService.getErrorListener().subscribe(
    //   message => this.hasError = message !== null
    // );
  }

  // ngOnDestroy() {
  //   this.errorSub.unsubscribe();
  // }
}
