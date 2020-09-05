import { Types } from '../actions/users';

const INITIAL_STATE = {};

interface Action {
  type: string;
  payload?: any;
}

export default function users(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case Types.LOGIN_USER: {
      return {
        ...state,
        // registerLogin: action.payload,
      };
    }
    case Types.GET_USERS_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
