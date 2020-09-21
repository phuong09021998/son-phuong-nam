export const Types = {
  LOGIN_USER: 'user/login-user',
  GET_USER_SUCCESS: 'user/get-user-success',
  GET_USER: 'user/get-user',
  CREATE_USER: 'user/create-user',
  CREATE_USER_ERROR: 'user/create-user-error',
  LOG_OUT_USER: 'user/logout-user',
  LOG_OUT_USER_ERROR: 'user/logout-user-error',
  UPDATE_USER: 'user/update-user',
  UPDATE_USER_ERROR: 'user/update-user-error',
  LOGIN_BY_GOOGLE: 'user/login-by-google',
  LOGIN_BY_GOOGLE_ERROR: 'user/login-by-google-error',
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

export const createUser = (user: any) => ({
  type: Types.CREATE_USER,
  payload: {
    ...user,
  },
});

export const updateUser = (fields: any) => ({
  type: Types.UPDATE_USER,
  payload: {
    ...fields,
  },
});

export const loginByGoogle = (fields: any) => ({
  type: Types.LOGIN_BY_GOOGLE,
  payload: {
    ...fields,
  },
});

export const loginByGoogleError = ({ error }: any) => ({
  type: Types.LOGIN_BY_GOOGLE_ERROR,
  payload: {
    error,
  },
});

export const createUsersError = ({ error }: any) => ({
  type: Types.CREATE_USER_ERROR,
  payload: {
    error,
  },
});

export const updateUserError = ({ error }: any) => ({
  type: Types.UPDATE_USER_ERROR,
  payload: {
    error,
  },
});
