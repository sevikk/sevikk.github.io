import { User } from '../../models/user';
import { AuthActionTypes, All } from '../actions/auth.actions';


export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {           
      return {
        ...state,
        isAuthenticated: true,
        user: {
          email: action.payload.email,
          token: action.payload.token,
          expiresIn: action.payload.expiresIn,
          id: action.payload.userId,
          name: action.payload.user.name,
          image: action.payload.user.image
        },
        errorMessage: null
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: 'Incorrect email and/or password.'
      };
    }
    case AuthActionTypes.SIGNUP_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          email: action.payload.email,
          name: action.payload.name
        },
        errorMessage: null
      };
    }
    case AuthActionTypes.SIGNUP_FAILURE: {
      return {
        ...state,
        errorMessage: 'That email is already in use.'
      };
    }
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }
    case AuthActionTypes.AUTO_LOGIN: {      
      return {
        ...state,
        isAuthenticated: true,
        user: {
          email: action.payload.email,
          name: action.payload.name,
          image: action.payload.image
        }
      }
    }
    case AuthActionTypes.UPDATE_USER_DATA_SUCCESS: {      
      return {
        ...state,
        user: {
          name: action.payload.result.name,
          email: action.payload.result.email,
          image: action.payload.result.imagePath
        }
      }
    }
    case AuthActionTypes.CHANGE_PASSWORD_SUCCESS: {      
      return  {
        ...state,
        isAuthenticated: true,
        user: {
          email: action.payload.email,
          token: action.payload.token,
          expiresIn: action.payload.expiresIn,
          id: action.payload.userId,
          name: action.payload.name,
          image: action.payload.user.image
        },
        errorMessage: null
      };
    }
    default: {
      return state;
    }
    
  }
}
