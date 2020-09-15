export const Types = {
  GET_POSTS_BY_ADMIN: 'admin/get-posts',
  GET_POSTS_BY_ADMIN_SUCCESS: 'admin/get-posts-success',
};

export const getPostsByAdmin = () => ({
  type: Types.GET_POSTS_BY_ADMIN,
});

export const getPostsByAdminSuccess = ({ items }: any) => ({
  type: Types.GET_POSTS_BY_ADMIN_SUCCESS,
  payload: {
    items,
  },
});
