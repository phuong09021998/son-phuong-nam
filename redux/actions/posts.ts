export const Types = {
  GET_POSTS_BY_ADMIN: 'admin/get-posts',
  GET_POSTS_BY_ADMIN_SUCCESS: 'admin/get-posts-success',
  CREATE_POST: 'admin/create-post',
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

export const createPost = ({ title, type, upload, content }: any) => ({
  type: Types.CREATE_POST,
  payload: {
    title,
    type,
    upload,
    content,
  },
});
