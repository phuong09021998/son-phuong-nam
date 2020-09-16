import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPostsByAdmin } from 'redux/actions/posts';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './AdminPosts.module.scss';
import TopAdminTable from '../TopAdminTable';
import { Table, Tag, Space, Popconfirm, message, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import FormField from '../FormField';
import Button from '@material-ui/core/Button';
import { update, generateData, isFormValid } from 'components/utils/formAction';
import { createPost, deletePost } from 'redux/actions/posts';
interface Props {
  getPostsByAdmin(): void;
  posts: any;
  createPost(data: any): void;
  deletePost(id: any): void;
  getPostsError: any;
  createPostError: any;
  deletePostError: any;
}

function AdminPosts({
  posts,
  getPostsByAdmin,
  createPost,
  deletePost,
  getPostsError,
  createPostError,
  deletePostError,
}: Props) {
  const initialForm = {
    formError: false,
    formMessage: '',
    formdata: {
      title: {
        element: 'input',
        value: '',
        config: {
          name: 'title_input',
          type: 'title',
          // placeholder: 'Email',
          label: 'Tiêu đề',
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        showlabel: true,
        validationMessage: '',
      },
      type: {
        element: 'select',
        value: 'Dự án',
        config: {
          name: 'type_input',
          type: 'type',
          label: 'Thể loại',
          options: [{ value: 'Dự án' }, { value: 'Dịch vụ' }, { value: 'Kiến thức' }],
        },
        validation: {
          required: true,
        },
        valid: true,
        touched: false,
        showlabel: true,
        validationMessage: '',
      },
      upload: {
        element: 'image',
        value: '',
        config: {
          label: 'Ảnh đại diện',
        },
        validation: {
          required: true,
        },
        valid: false,
        showlabel: true,
        touched: true,
        validationMessage: 'Bạn phải nhập mục này',
      },
      content: {
        element: 'rich_text',
        value: '',
        config: {
          name: 'content_input',
          type: 'content',
          // placeholder: 'Email',
          label: 'Nội dung',
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        showlabel: true,
        validationMessage: '',
      },
    },
  };

  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState({
    active: false,
    status: 'none',
  });
  const [form, setForm] = useState(initialForm);
  const [isWaiting, setWaiting] = useState(false);

  const columns = [
    {
      title: 'Tên bài viết',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Thể loại',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => {
        if (type === 'info') {
          return <Tag color="green">Kiến thức</Tag>;
        } else if (type === 'service') {
          return <Tag color="blue">Dịch vụ</Tag>;
        } else {
          return <Tag color="orange">Dự án </Tag>;
        }
      },
    },
    {
      title: 'Xuất bản',
      dataIndex: 'publish',
      key: 'publish',
      render: (publish: boolean) => {
        if (publish) {
          return <Switch defaultChecked checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />;
        } else {
          return <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />;
        }
      },
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (record: any) => (
        <Space size="middle">
          <a>Sửa</a>
          <Popconfirm
            title="Bạn có muốn xóa bài viết này?"
            onConfirm={() => handleDelete(record._id)}
            okText="Xóa"
            cancelText="Không"
          >
            <a>Xóa</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleDelete = (id: string) => {
    deletePost({ id });
  };

  const handleCreatePost = () => {
    setEdit({ active: true, status: 'create' });
    setWaiting(false);
    setForm(initialForm);
  };

  const updateForm = (element: any) => {
    const newFormdata: any = update(element, form.formdata, 'posts');
    setForm({
      ...form,
      formError: false,
      formdata: newFormdata,
    });
  };

  const submitForm = (e: any): void => {
    e.preventDefault();

    const dataToSubmit = generateData(form.formdata, 'posts');
    const formIsValid = isFormValid(form.formdata, 'posts');

    if (formIsValid) {
      setWaiting(true);
      createPost(dataToSubmit);
    } else {
      setForm({
        ...form,
        formError: true,
        formMessage: 'Kiểm tra lại thông tin',
      });
    }
  };

  const exitForm = (e: any) => {
    e.preventDefault();

    setEdit({ active: false, status: 'none' });
    setWaiting(false);
  };

  useEffect(() => {
    getPostsByAdmin();
  }, []);

  useEffect(() => {
    if (getPostsError) {
      message.error(getPostsError);
    }
  }, [getPostsError]);

  useEffect(() => {
    if (deletePostError) {
      message.error(deletePostError);
    }
  }, [deletePostError]);

  useEffect(() => {
    if (createPostError) {
      setWaiting(false);
      setForm({
        ...form,
        formdata: {
          ...form.formdata,
          title: {
            ...form.formdata.title,
            valid: false,
            validationMessage: 'Tên bài viết đã tồn tại',
          },
        },
      });
    }
  }, [createPostError]);

  useEffect(() => {
    if (posts) {
      setLoading(false);
      setWaiting(false);
      setEdit({ active: false, status: 'none' });
    }
  }, [posts]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <CircularProgress size={50} thickness={4} />
      </div>
    );
  } else if (edit.active) {
    return (
      <div className={styles.formContainer}>
        <form>
          <div className={styles.title} onSubmit={(event) => submitForm(event)}>
            {edit.status === 'create' ? 'Thêm bài viết' : 'Sửa bài viết'}
          </div>
          <FormField id={'title'} formdata={form.formdata.title} change={(e: any) => updateForm(e)} />
          <FormField id={'type'} formdata={form.formdata.type} change={(e: any) => updateForm(e)} />
          <FormField id={'upload'} formdata={form.formdata.upload} change={(e: any) => updateForm(e)} />
          <FormField id={'content'} formdata={form.formdata.content} change={(e: any) => updateForm(e)} />
          {form.formError && <div className={styles.errorLabel}>{form.formMessage}</div>}
          {isWaiting && (
            <div className={styles.waiting}>
              <CircularProgress color="secondary" />
            </div>
          )}
          <div className={styles.buttonWrapper}>
            <Button variant="contained" color="primary" className={styles.button} onClick={(event) => exitForm(event)}>
              Hủy
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={styles.button}
              onClick={(event) => submitForm(event)}
              type="submit"
            >
              Xác nhận
            </Button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.topWrapper}>
          <TopAdminTable handleCreate={handleCreatePost} />
        </div>
        <div className={styles.tableWrapper}>
          <Table columns={columns} dataSource={posts} rowKey={(record) => record._id} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  posts: state.posts.postsByAdmin,
  getPostsError: state.posts.getPostsByAdminError,
  createPostError: state.posts.createPostError,
  deletePostError: state.posts.deletePostError,
});

export default connect(mapStateToProps, { getPostsByAdmin, createPost, deletePost })(AdminPosts);
