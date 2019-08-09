import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';

import {
  AuthActionTypes,
  LogIn, LogInSuccess, LogInFailure,
  SignUp, SignUpSuccess, SignUpFailure,
  LogOut,
  AutoLogin,
  UpdateUser,
  UpdateUserSuccess,
} from '../actions/auth.actions';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user';


@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthService
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
        catchError((error) => {
          return (new LogInFailure({ error: error }) as any);
        })
      )
    })
  )
    


  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((user) => {      
      localStorage.setItem("email", user.payload.email)
      this.authService.loggedIn(user.payload.user);
    })
  );

  @Effect({ dispatch: false })
  LogInFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE)
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
    switchMap((user) => {
      return this.authService.login(user.payload.email, user.payload.password)
        .pipe(
          map(response => {
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
      this.authService.logout();
    })
  );

  @Effect({ dispatch: false })
  AutoLogin: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.AUTO_LOGIN),
    map((action: AutoLogin) => action.payload)
  )

  @Effect()
  UpdateUser: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.UPDATE_USER_DATA),
    map((action: UpdateUser) => action.payload),
    switchMap(payload => {
      return this.authService.updateUser(payload.id, payload.name, payload.email)
      .pipe(
        map((user: User) => {
          return new UpdateUserSuccess({name: payload.name, email: payload.email});
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
      console.log(user);
      localStorage.setItem("name", user.payload.name);

    })
  )

}
