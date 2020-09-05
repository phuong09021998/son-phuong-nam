export const Types = {
  LOGIN_USER: 'user/login-user',
  GET_USERS_SUCCESS: 'user/get-user-success',
};

interface LoginUser {
  email: string;
  password: string;
}

export const loginUser = ({ email, password }: LoginUser) => ({
  type: Types.LOGIN_USER,
  payload: {
    email,
    password,
  },
});

export const getUsersSuccess = (user: any) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: {
    ...user,
  },
});
