export const Types = {
  GET_USERS: 'admin/get-users',
  GET_USERS_SUCCESS: 'admin/get-users-success',
  CREATE_USER: 'admin/create-user',
};

interface User {
  email: string;
  name: string;
  role: number;
  password: string;
}

export const getUsers = () => ({
  type: Types.GET_USERS,
});

export const getUserSuccess = (users: any) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: {
    ...users,
  },
});

export const createUserByAdmin = ({ email, name, password, role }: User) => ({
  type: Types.CREATE_USER,
  payload: {
    email,
    name,
    password,
    role,
  },
});
