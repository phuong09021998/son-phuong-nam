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
import { createPost } from 'redux/actions/posts';
interface Props {
  getPostsByAdmin(): void;
  posts: any;
  createPost(data: any): void;
}

function AdminPosts({ posts, getPostsByAdmin, createPost }: Props) {
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
    console.log(id);
  };

  const handleCreatePost = () => {
    // console.log('create');
    setEdit({ active: true, status: 'create' });
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
      console.log(dataToSubmit);
      createPost(dataToSubmit);
    } else {
      setForm({
        ...form,
        formError: true,
        formMessage: 'Kiểm tra lại thông tin',
      });
    }
  };

  useEffect(() => {
    getPostsByAdmin();
  }, []);

  useEffect(() => {
    if (posts) {
      setLoading(false);
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
          <Button
            variant="contained"
            color="secondary"
            className={styles.button}
            onClick={(event) => submitForm(event)}
          >
            Xác nhận
          </Button>
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
});

export default connect(mapStateToProps, { getPostsByAdmin, createPost })(AdminPosts);
