import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, throwError, of, empty } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';

import {
  AuthActionTypes,
  LogIn, LogInSuccess, LogInFailure,
  SignUp, SignUpSuccess, SignUpFailure,
  LogOut,
  AutoLogin,
  UpdateUser,
  UpdateUserSuccess,
  ChangePasswordSuccess
} from '../actions/auth.actions';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  @Effect()
  LogIn: Observable<any> = this.actions
  .pipe(
    ofType(AuthActionTypes.LOGIN),
    map((action: LogIn) => action.payload),
    switchMap(payload => {
      return this.authService.login(payload.email, payload.password)
      .pipe(
        map((user) => {
          return new LogInSuccess({user: user, email: payload.email});
        }),
        catchError((err: any) => {
          return of(new LogInFailure({ error: err.error.message }))
        })
      )
    })
  )

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((user) => { 
      this._snackBar.open('Login succesfully', null, {
        duration: 2000,
      });     
      localStorage.setItem("email", user.payload.email)
      this.authService.loggedIn(user.payload.user);
    })
  );

  @Effect({ dispatch: false })
  LogInFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE),
    map((action: any) => action.payload)
  );

  @Effect()
  SignUp: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP),
    map((action: SignUp) => action.payload),
    switchMap(payload => {      
      return this.authService.createUser(payload.name, payload.email, payload.password)
      .pipe(
        map((user: User | any) => {
          return new SignUpSuccess({
            userData: user.userData
          });
        }),
        catchError((err) => {
          return of(new SignUpFailure({ error: err.error.message }))
        })
      )
    })
  )

  @Effect({ dispatch: false })
  SignUpSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_SUCCESS),
    map((action: SignUp) => action.payload),
    tap(result => {
      this._snackBar.open('Sign up succesfully', null, {
        duration: 2000,
      });
      this.authService.loggedIn(result.userData)
    })
  );
  

  @Effect({ dispatch: false })
  SignUpFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_FAILURE),
    map((action: SignUpFailure) => action.payload)
  );

  @Effect({ dispatch: false })
  public LogOut: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap((user) => {
      this._snackBar.open('Logout succesfully', null, {
        duration: 2000,
      });
      this.authService.logout();
    })
  );

  @Effect({ dispatch: false })
  AutoLogin: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.AUTO_LOGIN),
    map((action: AutoLogin) => action.payload)
  )

  @Effect()
  ChangePassword: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.CHANGE_PASSWORD),
    map((action: any) => action.payload),
    switchMap(user => {       
      return this.authService.changePassword(user)
      .pipe( 
        map(result => {          
          return new ChangePasswordSuccess(result)
        }),
        catchError((error) => {
          return (new SignUpFailure({ error: error }) as any);
        })
        
      )
    })
  )

  @Effect({ dispatch: false })
  ChangePasswordSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.CHANGE_PASSWORD_SUCCESS),
    map((action: any) => action.payload),
    tap( loggedInData =>  {
      this.authService.loggedIn(loggedInData)
    })
  )

  @Effect()
  UpdateUser: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.UPDATE_USER_DATA),
    map((action: UpdateUser) => action.payload),
    switchMap(payload => {      
      return this.authService.updateUser(payload.id, payload.name, payload.email, payload.image)
      .pipe(
        map((user: User | any) => {
          return new UpdateUserSuccess({
            result: user.result
          });
        }),
        catchError((error) => {
          return (new SignUpFailure({ error: error }) as any);
        })
      )
    })
  )

  @Effect({dispatch: false})
  UpdateUserSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.UPDATE_USER_DATA_SUCCESS),
    tap(user => {      
      this._snackBar.open('User updated succesfully', null, {
        duration: 2000,
      });
      this.authService.loggedIn(user.payload.result);
      localStorage.setItem("name", user.payload.result.name);
      localStorage.setItem("image", user.payload.result.imagePath);
    })
  )

}
