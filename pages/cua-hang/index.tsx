import React from 'react';
import MainLayout from 'layouts/MainLayout';
import styles from './Shop.module.scss';

export default function Shop() {
  return (
    <MainLayout title="Cửa hàng">
      <div className={styles.shopWrapper}>
        <div className={styles.blurBackgroundWrapper} style={{ background: `url('/images/paint-shop.jpg')` }}>
          <div className={styles.blurBackground} />
          <div className={styles.wave}>
            <img src="/images/wave-white.svg" alt="wave" />
          </div>
          <div className={styles.name}>CỬA HÀNG</div>
        </div>
      </div>
    </MainLayout>
  );
}
