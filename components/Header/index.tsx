import React, { Fragment } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { Collapse } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { connect } from 'react-redux';
import { toggleRegisterLogin } from '../../redux/actions/ui';

const { Panel } = Collapse;

interface Props {
  toggleRegisterLogin(isOpen: boolean, status: string): void;
}

function Header({ toggleRegisterLogin }: Props) {
  const isSmallDevice: boolean = useMediaQuery({ query: '(max-width: 768px)' });

  const isMediumLargeDevice: boolean = useMediaQuery({
    query: '(min-width: 769px)',
  });

  const handleOpenLogin = (): void => {
    toggleRegisterLogin(true, 'login');
  };

  const handleOpenRegister = (): void => {
    toggleRegisterLogin(true, 'register');
  };

  const renderTopMenu = () => (
    <div className={styles.topMenu}>
      <div className={styles.text}>MENU</div>
      <div className={styles.icon}>
        <img src="/icons/menu.svg" alt="menu-icon" />
      </div>
    </div>
  );

  const renderMediumLargeDeviceLayout = () => (
    <div className={styles.header}>
      <Link href="/">
        <div className={styles.logo}>
          <div className={styles.logoWrapper}>
            <img src="/icons/logo.svg" alt="logo" />
          </div>
          <div className={styles.text}>
            <div className={styles.name}>PHƯƠNG NAM</div>
            <div className={styles.slogan}>Thách Thức Thời Gian</div>
          </div>
        </div>
      </Link>
      <div className={styles.menuWrapper}>
        <Link href="/">
          <div className={styles.menuItem}>Trang Chủ</div>
        </Link>
        <Link href="/cua-hang">
          <div className={styles.menuItem}>Cửa Hàng</div>
        </Link>
        <Link href="/dich-vu">
          <div className={styles.menuItem}>Dịch Vụ</div>
        </Link>
        <Link href="/du-an">
          <div className={styles.menuItem}>Dự Án</div>
        </Link>
        <Link href="/kien-thuc">
          <div className={styles.menuItem}>Kiến Thức</div>
        </Link>
        <Link href="/gioi-thieu">
          <div className={styles.menuItem}>Giới Thiệu</div>
        </Link>
        <Link href="/lien-he">
          <div className={styles.menuItem}>Liên Hệ</div>
        </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.cart}>
          <img src="/icons/shopping-cart.svg" alt="cart" />
        </div>
        <div className={styles.loginRegister}>
          <div className={styles.login} onClick={handleOpenLogin}>
            ĐĂNG NHẬP
          </div>
          <div className={styles.register} onClick={handleOpenRegister}>
            hoặc <span>đăng ký</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSmallDeviceLayout = () => (
    <div className={styles.header}>
      <div className={styles.top}>
        <Link href="/">
          <div className={styles.logo}>
            <div className={styles.logoWrapper}>
              <img src="/icons/logo.svg" alt="logo" />
            </div>
            <div className={styles.text}>
              <div className={styles.name}>PHƯƠNG NAM</div>
              <div className={styles.slogan}>Thách Thức Thời Gian</div>
            </div>
          </div>
        </Link>
        <div className={styles.right}>
          <div className={styles.cart}>
            <img src="/icons/shopping-cart.svg" alt="cart" />
          </div>
          <div className={styles.loginRegister}>
            <div className={styles.login} onClick={handleOpenLogin}>
              ĐĂNG NHẬP
            </div>
            <div className={styles.register} onClick={handleOpenRegister}>
              hoặc <span>đăng ký</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.menuWrapper}>
        <Collapse className={styles.menu} style={{ padding: '0' }}>
          <Panel header={renderTopMenu()} key="1" showArrow={false} style={{ padding: '0' }}>
            <Link href="/">
              <div className={styles.menuItem}>Trang Chủ</div>
            </Link>
            <Link href="/cua-hang">
              <div className={styles.menuItem}>Cửa Hàng</div>
            </Link>
            <Link href="/dich-vu">
              <div className={styles.menuItem}>Dịch Vụ</div>
            </Link>
            <Link href="/du-an">
              <div className={styles.menuItem}>Dự Án</div>
            </Link>
            <Link href="/kien-thuc">
              <div className={styles.menuItem}>Kiến Thức</div>
            </Link>
            <Link href="/gioi-thieu">
              <div className={styles.menuItem}>Giới Thiệu</div>
            </Link>
            <Link href="/lien-he">
              <div className={styles.menuItem}>Liên Hệ</div>
            </Link>
          </Panel>
        </Collapse>
      </div>
    </div>
  );

  return (
    <Fragment>
      {isSmallDevice && renderSmallDeviceLayout()}
      {isMediumLargeDevice && renderMediumLargeDeviceLayout()}
    </Fragment>
  );
}

export default connect(null, { toggleRegisterLogin })(Header);
