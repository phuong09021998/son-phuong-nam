export const Types = {
  TOGGLE_REGISTER_LOGIN: 'ui/toggle-register-login',
};

export const toggleRegisterLogin = (isOpen: boolean, status: string) => ({
  type: Types.TOGGLE_REGISTER_LOGIN,
  payload: {
    isOpen,
    status,
  },
});
