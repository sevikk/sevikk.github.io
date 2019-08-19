import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ChangePassword } from 'src/app/store/actions/auth.actions';
import { AppAuthState } from 'src/app/store/app.states';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  isLoading = false;
  changePasswordForm: FormGroup;

  constructor(
    private store: Store<AppAuthState>,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.changePasswordForm = new FormGroup({
      password: new FormControl('', Validators.minLength(3)),
      repeatPassword: new FormControl('',  Validators.minLength(3))
    }, this.pwdMatchValidator)
  }

  pwdMatchValidator(form: FormGroup) {
    return form.get('password').value === form.get('repeatPassword').value
       ? null : {'mismatch': true};
 }

 cheangePassword() {
  if (this.changePasswordForm.invalid) {
    return
  }
  const payload = {
    newPassword: this.changePasswordForm.value.password,
    token: this.activateRoute.snapshot.params.id
  }
  this.store.dispatch(new ChangePassword(payload));
 }

}
