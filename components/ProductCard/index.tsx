import React from 'react';
import styles from './ProductCard.module.scss';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import Button from '@material-ui/core/Button';

export default function ProductCard({ price, salePrice, name, urlTitle, available }: any) {
  const handleAddToCart = (e: any) => {
    e.preventDefault();
    console.log('Add to cart');
  };

  return (
    <div className={styles.cardWrapper}>
      <Fade bottom>
        <div className={styles.card}>
          {salePrice && <div className={styles.saleTag}>SALE!</div>}
          {!available && <div className={styles.outOfStock}>Hết hàng</div>}
          <div className={styles.img} style={{ background: `url('/api/product/image/${urlTitle}` }}></div>
          <div className={styles.content}>
            <div className={styles.title}>{name}</div>
            {salePrice && <div className={styles.originalPrice}>{price} đ</div>}
            {salePrice ? (
              <div className={styles.price}>{salePrice} đ</div>
            ) : (
              <div className={styles.price}>{price} đ</div>
            )}
            <div className={styles.button}>
              <Button
                style={{
                  backgroundColor: `${available ? '#e91e63' : 'gray'}`,
                  color: 'white',
                  fontWeight: 'bold',
                  // marginBottom: '1em',
                }}
                disabled={available ? false : true}
                onClick={(e): any => handleAddToCart(e)}
              >
                THÊM VÀO GIỎ HÀNG
              </Button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
