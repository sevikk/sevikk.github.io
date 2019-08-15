import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, throwError, of } from 'rxjs';
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
          new LogInFailure({ error: err });
          return of(null) //throwError(new LogInFailure({ error: err }))
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
    map((action: any) => action.payload),
    tap(r => this.router.navigate(['/']))
  );

  @Effect()
  SignUp: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP),
    map((action: SignUp) => action.payload),
    switchMap(payload => {      
      return this.authService.createUser(payload.name, payload.email, payload.password)
      .pipe(
        map((user: User) => {
          return new SignUpSuccess({name: payload.name, password: payload.password, email: payload.email});
        }),
        catchError((error) => {
          return (new SignUpFailure({ error: error }) as any);
        })
      )
    })
  )

  @Effect({ dispatch: false })
  SignUpSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_SUCCESS),
    switchMap((user: any) => {
      return this.authService.login(user.payload.email, user.payload.password)
        .pipe(
          map(response => {
            this._snackBar.open('Sign up succesfully', null, {
              duration: 2000,
            });
            this.authService.loggedIn(response)
          })
        );
    })
  );
  

  @Effect({ dispatch: false })
  SignUpFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_FAILURE)
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
          return new UpdateUserSuccess({name: payload.name, email: payload.email, image: user.result.imagePath});
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
      localStorage.setItem("name", user.payload.name);
      localStorage.setItem("image", user.payload.image);
    })
  )

}
