import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, AbstractControl } from "@angular/forms";
import { Observable } from "rxjs";
import { Store } from '@ngrx/store';

import { AuthService } from "../auth.service";
import { AppAuthState, selectAuthState } from 'src/app/store/app.states';
import { SignUp } from 'src/app/store/actions/auth.actions';
import { State } from 'src/app/store/reducers/auth.reducers';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  isLoading = false;

  errorMessage: string;

  getState: Observable<any>;

  authForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    public authService: AuthService,
    private store: Store<AppAuthState>
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state: State) => {
      if (state) {
        this.isLoading = false;
      }
    })
    this.authForm.controls.email.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((value: string) => {
      this.authService.checkValidEmail(value)
        .subscribe(response => {        
          if (response.isAlreadyExist) {
            this.authForm.controls.email.setValidators(ErrorValidate);
          } else {
            this.authForm.controls.email.clearValidators();
          }
          this.authForm.controls.email.updateValueAndValidity();
        })
    })
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
}

export function ErrorValidate(control: AbstractControl) {
  return { validEmail: true };;
}
