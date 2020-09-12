export const Types = {
  GET_USERS: 'admin/get-users',
  GET_USERS_SUCCESS: 'admin/get-users-success',
};

export const getUsers = () => ({
  type: Types.GET_USERS,
});

export const getUserSuccess = (users: any) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: {
    ...users,
  },
});
