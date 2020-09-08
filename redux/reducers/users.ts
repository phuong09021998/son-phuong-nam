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
        error: undefined,
      };
    }
    case Types.USER_ERROR: {
      return {
        error: action.payload.error,
      };
    }
    default: {
      return state;
    }
  }
}
