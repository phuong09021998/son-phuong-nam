import { Types } from '../actions/users';

const INITIAL_STATE = {};

interface Action {
  type: string;
  payload?: any;
}

export default function users(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case Types.GET_USER_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        createUserError: undefined,
        updateUserError: undefined,
        logoutUserError: undefined,
        loginByGoogleError: undefined,
      };
    }
    case Types.CREATE_USER_ERROR: {
      return {
        ...state,
        createUserError: action.payload.error,
      };
    }

    case Types.UPDATE_USER_ERROR: {
      return {
        ...state,
        updateUserError: action.payload.error,
      };
    }

    case Types.LOG_OUT_USER_ERROR: {
      return {
        ...state,
        logoutUserError: action.payload.error,
      };
    }

    case Types.LOGIN_BY_GOOGLE_ERROR: {
      return {
        ...state,
        loginByGoogleError: action.payload.error,
      };
    }

    default: {
      return state;
    }
  }
}
