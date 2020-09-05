import { Types } from '../actions/ui';

const INITIAL_STATE = {
  registerLogin: {
    isOpen: false,
    status: 'nonzero',
  },
};

interface Action {
  type: string;
  payload?: any;
}

export default function ui(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case Types.TOGGLE_REGISTER_LOGIN: {
      return {
        ...state,
        registerLogin: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
