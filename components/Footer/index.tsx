import React, { Fragment } from 'react';
import Media from 'react-media';
import styles from './footer.module.scss';

interface MediaMatches {
  small: boolean;
  // mediumLarge: boolean;
}

export default function Footer() {
  const renderSmallDeviceLayout = () => (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <div className={styles.logoWrapper}>
          <img src="/icons/logo.svg" alt="logo" />
        </div>
        <div className={styles.text}>
          <div className={styles.name}>PHƯƠNG NAM</div>
          <div className={styles.slogan}>Thách Thức Thời Gian</div>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.contactItem}>
          <div className={styles.icon}>
            <img src="/icons/telephone.svg" alt="phone" />
          </div>
          <div className={styles.text}>0908 108 690</div>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.icon}>
            <img src="/icons/zalo.svg" alt="zalo" />
          </div>
          <div className={styles.text}>0908 108 690</div>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.icon}>
            <img src="/icons/mail.svg" alt="email" />
          </div>
          <div className={styles.text}>quanepoxy@gmail.com</div>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.icon}>
            <img src="/icons/facebook-2.svg" alt="facebook" />
          </div>
          <div className={styles.text}>fb.com/epoxyphuongnam</div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <div className={styles.icon}>
          <img src="/icons/logo.svg" alt="logo" />
        </div>
        <div className={styles.text}>2020 © Công Ty TNHH MTV Xây Dựng Sơn Phương Nam</div>
      </div>
    </footer>
  );

  return (
    <Media
      queries={{
        small: '(max-width: 768px)',
        // mediumLarge: '(min-width: 769px)',
      }}
    >
      {(matches: MediaMatches) => (
        <Fragment>
          {matches.small && renderSmallDeviceLayout()}
          {/* {matches.mediumLarge && renderMediumLargeDeviceLayout()} */}
        </Fragment>
      )}
    </Media>
  );
}
