import { Types } from '../actions/ui';

const INITIAL_STATE = {
  toggleRegisterLogin: false,
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
        toggleRegisterLogin: !state.toggleRegisterLogin,
      };
    }
    default: {
      return state;
    }
  }
}
