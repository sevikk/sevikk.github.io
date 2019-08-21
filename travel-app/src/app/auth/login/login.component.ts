import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription, Observable } from "rxjs";

import { AuthService } from "../auth.service";
import { Store } from '@ngrx/store';
import { AppAuthState, selectAuthState } from 'src/app/store/app.states';
import { LogIn } from 'src/app/store/actions/auth.actions';
import { State } from 'src/app/store/reducers/auth.reducers';
import { MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  
  authForm: FormGroup;
  getState: Observable<any>;

  isLoading = false;

  constructor(
    public authService: AuthService,
    private store: Store<AppAuthState>,
    public dialog: MatDialog
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state: State) => {
      if (state) {
        this.isLoading = false;
        if (state.errorMessage) {
          this.dialog.open(ModalDialogComponent, {
            width: '400px',
            data: state.errorMessage
          });
        }
      }
    })
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
}
