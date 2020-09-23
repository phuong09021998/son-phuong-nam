import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './WhyUs.module.scss';

export default function WhyUs() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1200px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1200px)' });
  const isSmallDevice = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const renderLargeDevice = () => (
    <React.Fragment>
      <div className={styles.item}>
        <div className={styles.icon}>
          <img src="/icons/professional.svg" alt="professional" />
        </div>
        <div className={styles.title}>CHUYÊN NGHIỆP</div>
        <div className={styles.text}>Đội ngũ thi công lành nghề chuyên nghiệp</div>
      </div>
      <div className={styles.itemLarge}>
        <div className={styles.icon}>
          <img src="/icons/machine.svg" alt="machine" />
        </div>
        <div className={styles.title}>MÁY MÓC HIỆN ĐẠI</div>
        <div className={styles.text}>Hỗ trợ máy móc, nhân công khi khách hàng mua vật tư với số lượng lớn</div>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}>
          <img src="/icons/standard.svg" alt="standard" />
        </div>
        <div className={styles.title}>CHẤT LƯỢNG</div>
        <div className={styles.text}>
          Thời gian thi công nhanh, bảo hành tốt, đem lại sự tin tưởng đối với khách hàng
        </div>
      </div>
    </React.Fragment>
  );

  const renderMediumDevice = () => (
    <React.Fragment>
      <div className={styles.itemLarge}>
        <div className={styles.icon}>
          <img src="/icons/professional.svg" alt="professional" />
        </div>
        <div className={styles.title}>CHUYÊN NGHIỆP</div>
        <div className={styles.text}>Đội ngũ thi công lành nghề chuyên nghiệp</div>
      </div>
      <div className={styles.smallItemsWrapper}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <img src="/icons/standard.svg" alt="standard" />
          </div>
          <div className={styles.title}>CHẤT LƯỢNG</div>
          <div className={styles.text}>
            Thời gian thi công nhanh, bảo hành tốt, đem lại sự tin tưởng đối với khách hàng
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <img src="/icons/machine.svg" alt="machine" />
          </div>
          <div className={styles.title}>MÁY MÓC HIỆN ĐẠI</div>
          <div className={styles.text}>Hỗ trợ máy móc, nhân công khi khách hàng mua vật tư với số lượng lớn</div>
        </div>
      </div>
    </React.Fragment>
  );

  const renderSmallDevice = () => (
    <React.Fragment>
      <div className={styles.item}>
        <div className={styles.icon}>
          <img src="/icons/professional.svg" alt="professional" />
        </div>
        <div className={styles.title}>CHUYÊN NGHIỆP</div>
        <div className={styles.text}>Đội ngũ thi công lành nghề chuyên nghiệp</div>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}>
          <img src="/icons/machine.svg" alt="machine" />
        </div>
        <div className={styles.title}>MÁY MÓC HIỆN ĐẠI</div>
        <div className={styles.text}>Hỗ trợ máy móc, nhân công khi khách hàng mua vật tư với số lượng lớn</div>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}>
          <img src="/icons/standard.svg" alt="standard" />
        </div>
        <div className={styles.title}>CHẤT LƯỢNG</div>
        <div className={styles.text}>
          Thời gian thi công nhanh, bảo hành tốt, đem lại sự tin tưởng đối với khách hàng
        </div>
      </div>
    </React.Fragment>
  );

  return (
    <div className={styles.whyUsWrapper}>
      {isDesktopOrLaptop && renderLargeDevice()}
      {isTabletOrMobile && renderMediumDevice()}
      {isSmallDevice && renderSmallDevice()}
    </div>
  );
}
