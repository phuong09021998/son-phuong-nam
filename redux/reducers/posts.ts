import { Types } from '../actions/posts';

const INITIAL_STATE = {};

interface Action {
  type: string;
  payload?: any;
}

export default function users(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case Types.GET_POSTS_BY_ADMIN_SUCCESS: {
      return {
        ...state,
        postsByAdmin: action.payload.items,
      };
    }

    default: {
      return state;
    }
  }
}
