import React, { useState } from 'react';
import axios from 'config/axios';
import MainLayout from 'layouts/MainLayout';
import GreenBackground from 'components/GreenBackground';
import Modal from 'react-modal';
import styles from './ProductDetail.module.scss';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

export default function ShopItem({ productData }: any) {
  const [openModal, setOpenModal] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      maxWidth: '60rem',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alightItems: 'center',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '3em',
    },
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  // console.log(productData);
  return (
    <MainLayout title={productData.name}>
      <GreenBackground name="Cửa hàng" breadcrumb={`Trang chủ / Cửa hàng / ${productData.name}`} />
      <div className={styles.productWrapper}>
        <div className={styles.imgWrapper}>
          <div className={styles.tagWrapper}>
            {productData.salePrice && <div className={styles.saleTag}>Sale !</div>}
            {!productData.available && <div className={styles.soldOut}>Hết hàng !</div>}
          </div>

          <div className={styles.zoom} onClick={handleOpenModal}>
            <img src="/icons/search.svg" alt="zoom" />
          </div>
          <div className={styles.img}>
            <img src={`/api/product/image/${productData.urlTitle}`} alt={productData.urlTitle} />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{productData.name}</div>
          <div className={styles.priceWrapper}>
            <div className={styles.title}> Giá:</div>
            <div className={styles.price}>
              {productData.salePrice && <span>{productData.price}đ</span>}{' '}
              {productData.salePrice ? productData.salePrice : productData.price}đ
            </div>
          </div>
          <div className={styles.quantity}>
            <div className={styles.title}>Số lượng:</div>
            <div className={styles.quantityInputWrapper}>
              <div className={styles.left}>-</div>
              <div className={styles.quantityInput}>
                <input type="number" />
              </div>
              <div className={styles.right}>+</div>
            </div>
          </div>
          <div className={styles.addToCartButton}>
            <Button
              style={{
                backgroundColor: `${productData.available ? '#e91e63' : 'gray'}`,
                textTransform: 'uppercase',
                fontWeight: 'bold',
                color: 'white',
              }}
              disabled={productData.available ? false : true}
            >
              Thêm vào giỏ hàng
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.backToShopButton}>
        <Link href="/cua-hang">
          <Button
            style={{ backgroundColor: ' #e91e63', textTransform: 'uppercase', fontWeight: 'bold', color: 'white' }}
          >
            Quay lại cửa hàng
          </Button>
        </Link>
      </div>

      <Modal isOpen={openModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <img src={`/api/product/image/${productData.urlTitle}`} alt={productData.urlTitle} />
        <div className={styles.closeModal} onClick={closeModal}>
          <img src="/icons/close-2.svg" alt="close" />
        </div>
      </Modal>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const paths = await axios.get('/producturls');
  // console.log(paths.data.paths);
  return {
    paths: paths.data.paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const productData = await axios.get(`/product/${params.id}`);
  return {
    props: {
      productData: productData.data.product,
    },
    revalidate: 1,
  };
}
