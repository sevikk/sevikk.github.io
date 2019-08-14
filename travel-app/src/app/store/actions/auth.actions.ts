import { Action } from '@ngrx/store';


export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  SIGNUP = '[Auth] Signup',
  SIGNUP_SUCCESS = '[Auth] Signup Success',
  SIGNUP_FAILURE = '[Auth] Signup Failure',
  LOGOUT = '[Auth] Logout',
  GET_STATUS = '[Auth] GetStatus',
  AUTO_LOGIN = '[Auth] Auto Login',
  CHANGE_PASSWORD = '[User] Change Password',
  CHANGE_PASSWORD_SUCCESS = '[User] Change Password Success',
  CHANGE_PASSWORD_FAILED = '[User] Change Password Failed',
  UPDATE_USER_DATA = '[User] Update User',
  UPDATE_USER_DATA_SUCCESS = '[User] Update User Success',
  UPDATE_USER_DATA_FAILURE = '[User] Update User Failure'
  
}

export class LogIn implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: any) {}
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LogInFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) {}
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SIGNUP;
  constructor(public payload: any) {}
}

export class SignUpSuccess implements Action {
  readonly type = AuthActionTypes.SIGNUP_SUCCESS;
  constructor(public payload: any) {}
}

export class SignUpFailure implements Action {
  readonly type = AuthActionTypes.SIGNUP_FAILURE;
  constructor(public payload: any) {}
}

export class LogOut implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export class AutoLogin implements Action {
  readonly type = AuthActionTypes.AUTO_LOGIN;
  constructor(public payload: any) {}
}

export class UpdateUser implements Action {
  readonly type = AuthActionTypes.UPDATE_USER_DATA;
  constructor(public payload: any) {}
}

export class UpdateUserSuccess implements Action {
  readonly type = AuthActionTypes.UPDATE_USER_DATA_SUCCESS;
  constructor(public payload: any) {}
}

export class UpdateUserFailure implements Action {
  readonly type = AuthActionTypes.UPDATE_USER_DATA_FAILURE;
  constructor(public payload: any) {}
}

export class ChangePassword implements Action {
  readonly type = AuthActionTypes.CHANGE_PASSWORD;
  constructor(public payload: any) {}
}

export class ChangePasswordSuccess implements Action {
  readonly type = AuthActionTypes.CHANGE_PASSWORD_SUCCESS;
  constructor(public payload: any) {}
}

export class ChangePasswordFailed implements Action {
  readonly type = AuthActionTypes.CHANGE_PASSWORD_FAILED;
  constructor(public payload: any) {}
}

export class GetStatus implements Action {
  readonly type = AuthActionTypes.GET_STATUS;
}

export type All =
  | LogIn
  | LogInSuccess
  | LogInFailure
  | SignUp
  | SignUpSuccess
  | SignUpFailure
  | LogOut
  | UpdateUser
  | UpdateUserSuccess
  | UpdateUserFailure
  | ChangePassword
  | ChangePasswordSuccess
  | ChangePasswordFailed
  | AutoLogin;