import React from 'react';
import { Carousel } from 'antd';
import styles from './HomeCarousel.module.scss';

interface Props {
  carousel: any;
}

function HomeCarousel({ carousel }: Props) {
  const Image1 = () => <img src={`data:${carousel[0].contentType};base64,${Buffer.from(carousel[0].data)}`} />;
  const Image2 = () => <img src={`data:${carousel[1].contentType};base64,${Buffer.from(carousel[1].data)}`} />;
  const Image3 = () => <img src={`data:${carousel[2].contentType};base64,${Buffer.from(carousel[2].data)}`} />;

  return (
    <div className={styles.carousel}>
      <Carousel autoplay>
        <div className={styles.item}>
          <Image1 />
        </div>
        <div className={styles.item}>
          <Image2 />
        </div>
        <div className={styles.item}>
          <Image3 />
        </div>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
