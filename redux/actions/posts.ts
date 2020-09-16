import { error } from 'console';

export const Types = {
  GET_POSTS_BY_ADMIN: 'admin/get-posts',
  GET_POSTS_BY_ADMIN_SUCCESS: 'admin/get-posts-success',
  CREATE_POST: 'admin/create-post',
  DELETE_POST: 'admin/delete-post',
  GET_POSTS_BY_ADMIN_ERROR: 'admin/get-posts-error',
  CREATE_POST_ERROR: 'admin/create-posts-error',
  DELETE_POST_ERROR: 'admin/delete-posts-error',
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

export const deletePost = ({ id }: any) => ({
  type: Types.DELETE_POST,
  payload: {
    id,
  },
});

export const getPostsByAdminError = ({ error }: any) => ({
  type: Types.GET_POSTS_BY_ADMIN_ERROR,
  payload: { error },
});

export const createPostError = ({ error }: any) => ({
  type: Types.CREATE_POST_ERROR,
  payload: { error },
});

export const deletePostError = ({ error }: any) => ({
  type: Types.DELETE_POST_ERROR,
  payload: { error },
});
