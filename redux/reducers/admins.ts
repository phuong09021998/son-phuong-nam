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
      };
    }
    case Types.CREATE_USER_ERROR: {
      return {
        ...state,
        createUserError: action.payload.error,
      };
    }
    case Types.DELETE_USER: {
      return {
        ...state,
        deleteUserError: action.payload.error,
      };
    }

    default: {
      return state;
    }
  }
}
