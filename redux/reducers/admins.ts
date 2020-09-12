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
        setWaiting: false,
      };
    }

    case Types.SET_WAITING: {
      return {
        ...state,
        isWaiting: true,
      };
    }

    case Types.CREATE_USER_ERROR: {
      return {
        ...state,
        createUserError: action.payload.error,
      };
    }

    default: {
      return state;
    }
  }
}
