import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm, FormGroup, FormControl } from "@angular/forms";
import { Subscription } from "rxjs";
import { Store } from '@ngrx/store';

import { AuthService } from "../auth.service";
import { AppAuthState } from 'src/app/store/app.states';
import { SignUp } from 'src/app/store/actions/auth.actions';

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSub: Subscription;

  authForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

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
  }

  onSignup() {
    if (this.authForm.invalid) {
      return;
    }
    this.isLoading = true;
    const payload = {
      name: this.authForm.value.name,
      email: this.authForm.value.email,
      password: this.authForm.value.password
    };
    
    this.store.dispatch(new SignUp(payload));
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
