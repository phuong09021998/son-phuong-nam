import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUsers } from 'redux/actions/admins';
import styles from './AdminUser.module.scss';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Table, Tag } from 'antd';

interface Props {
  getUsers(): void;
  users: any;
}

const columns = [
  {
    title: 'Tên',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Vai trò',
    dataIndex: 'role',
    key: 'role',
    render: (role: number) => {
      if (role === 2) {
        return <Tag color="red">Chủ sở hữu</Tag>;
      } else if (role === 1) {
        return <Tag color="orange">Quản trị viên</Tag>;
      } else {
        return <Tag color="green">Nguời dùng</Tag>;
      }
    },
  },
  {
    title: 'Hành động',
    key: 'action',
    render: () => <a>Xóa</a>,
  },
];

function AdminUsers({ getUsers, users }: Props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (users !== undefined) {
      setLoading(false);
    }
  }, users);

  if (loading) {
    return (
      <div className={styles.loading}>
        <CircularProgress size={50} thickness={4} />
      </div>
    );
  } else {
    // console.log();
    const usersArr: any = Object.values(users);
    return (
      <div className={styles.tableWrapper}>
        <div className={styles.topWrapper}></div>
        <div className={styles.table}>
          <Table columns={columns} dataSource={usersArr} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({ users: state.admins.data });

export default connect(mapStateToProps, { getUsers })(AdminUsers);
