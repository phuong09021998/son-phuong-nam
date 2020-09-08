export const Types = {
  LOGIN_USER: 'user/login-user',
  GET_USER_SUCCESS: 'user/get-user-success',
  GET_USER: 'user/get-user',
  USER_ERROR: 'user/error',
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

export const getUser = () => ({
  type: Types.GET_USER,
});

export const getUserSuccess = (user: any) => ({
  type: Types.GET_USER_SUCCESS,
  payload: {
    ...user,
  },
});

export const usersError = ({ error }: any) => ({
  type: Types.USER_ERROR,
  payload: {
    error,
  },
});
