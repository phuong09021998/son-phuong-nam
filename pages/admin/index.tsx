import React, { useEffect } from 'react';
import privateRoute from 'components/utils/privateRoute';
import styles from './Admin.module.scss';
import Link from 'next/link';
import { connect } from 'react-redux';
import { toggleRegisterLogin } from 'redux/actions/ui';

interface Props {
  toggleRegisterLogin(isOpen: boolean, status: string): any;
}

function Admin({ toggleRegisterLogin }: Props) {
  useEffect(() => {
    toggleRegisterLogin(false, 'none');
  });

  return (
    <div className={styles.container}>
      <div className={styles.leftAdmin}>
        <Link href="/">
          <div className={styles.topMenu}>
            <div className={styles.logo}>
              <img src="/icons/logo.svg" alt="logo" />
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.text}>PHƯƠNG NAM</div>
              <div className={styles.slogan}>Thách Thức Thời Gian</div>
            </div>
          </div>
        </Link>
        <hr />
        <div className={styles.mainMenu}>
          <div className={styles.menuItem}>
            <div className={styles.icon}>
              <img src="/icons/alarm.svg" alt="alarm" />
            </div>
            <div className={styles.text}>Thông Báo</div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.icon}>
              <img src="/icons/comment.svg" alt="comment" />
            </div>
            <div className={styles.text}>Tin Nhắn</div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.icon}>
              <img src="/icons/people.svg" alt="people" />
            </div>
            <div className={styles.text}>Người Dùng</div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.icon}>
              <img src="/icons/newspaper.svg" alt="news" />
            </div>
            <div className={styles.text}>Bài Viết</div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.icon}>
              <img src="/icons/product.svg" alt="product" />
            </div>
            <div className={styles.text}>Sản Phẩm</div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.icon}>
              <img src="/icons/more.svg" alt="more" />
            </div>
            <div className={styles.text}>Khác</div>
          </div>
        </div>
        <div className={styles.img}></div>
      </div>
      <div className={styles.rightAdmin}>this is right</div>
    </div>
  );
}

export default privateRoute(connect(null, { toggleRegisterLogin })(Admin), true);
