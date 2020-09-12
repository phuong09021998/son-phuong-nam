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
        error: undefined,
      };
    }
    default: {
      return state;
    }
  }
}
