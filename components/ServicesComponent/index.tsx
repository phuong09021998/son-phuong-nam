import React from 'react';
import styles from './Services.module.scss';
import WaveLayout from 'layouts/WaveBackgroundLayout';
// @ts-ignore
import Fade from 'react-reveal/Fade';

export default function Services({ services }: any) {
  return (
    <WaveLayout>
      <div className={styles.title}>DỊCH VỤ</div>
      <div className={styles.servicesWrapper}>
        {services.map((item: any, i: number) => (
          <Fade left={i % 2 ? false : true} right={i % 2 ? true : false} key={i}>
            <div className={styles.item}>
              <div className={styles.name}>{item.title}</div>
              <div className={styles.icon}>
                <img src={`/api/post/image/${item.urlTitle}`} alt="icon" />
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </WaveLayout>
  );
}
