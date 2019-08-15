import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

import { AuthService } from "../auth.service";
import { Store } from '@ngrx/store';
import { AppAuthState } from 'src/app/store/app.states';
import { LogIn } from 'src/app/store/actions/auth.actions';

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSub: Subscription;

  authForm: FormGroup;

  constructor(
    public authService: AuthService,
    private store: Store<AppAuthState>
  ) {}

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
    this.authForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onLogin() {
    if (this.authForm.invalid) {
      return;
    }
    this.isLoading = true;
    const payload = {
      email: this.authForm.value.email,
      password: this.authForm.value.password
    };
    this.store.dispatch(new LogIn(payload));
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
