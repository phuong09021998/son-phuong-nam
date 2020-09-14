import { Types } from '../actions/admins';

const INITIAL_STATE = {};

interface Action {
  type: string;
  payload?: any;
}

export default function users(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        createUserError: undefined,
        deleteUserError: undefined,
        getUsersError: undefined,
        editUserError: undefined,
      };
    }
    case Types.GET_USERS_ERROR: {
      return {
        ...state,
        getUsersError: action.payload.error,
      };
    }
    case Types.CREATE_USER_ERROR: {
      return {
        ...state,
        createUserError: action.payload.error,
      };
    }
    case Types.DELETE_USER_ERROR: {
      return {
        ...state,
        deleteUserError: action.payload.error,
      };
    }
    case Types.EDIT_USER_ERROR: {
      return {
        ...state,
        editUserError: action.payload.error,
      };
    }

    default: {
      return state;
    }
  }
}
