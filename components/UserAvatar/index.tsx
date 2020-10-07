import React, { useEffect, useState } from 'react';
import axios from 'config/axios';
import styles from './UserAvatar.module.scss';
import { Skeleton } from 'antd';
import { Avatar } from 'antd';

function UserAvatar({ userId }: any) {
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get(`/user/${userId}/`).then((res) => setUser(res.data.user));
  }, []);

  if (!user) {
    return <Skeleton avatar />;
  } else {
    // @ts-ignore
    if (user.avatar) {
      return (
        <div className={styles.avatar}>
          <Avatar src="/api/user/avatar" />
        </div>
      );

      // @ts-ignore
    } else if (user.thirdPartyAvatar) {
      return (
        <div className={styles.avatar}>
          {/* @ts-ignore */}
          <Avatar src={user.thirdPartyAvatar} />
        </div>
      );

      // @ts-ignore
    } else if (!user.avatar) {
      return (
        <div className={styles.avatar}>
          {/* @ts-ignore */}
          <Avatar className={styles.avatarName}>{user.name[0]}</Avatar>
        </div>
      );
    }
  }
}

export default UserAvatar;