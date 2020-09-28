import React, { useState } from 'react';
import MainLayout from 'layouts/MainLayout';
import GreenBackground from 'components/GreenBackground';
import styles from './Shop.module.scss';
import axios from 'config/axios';
import ProductCard from 'components/ProductCard';

export default function Shop({ products, siteInfo }: any) {
  // console.log(products);
  const [items, setItems] = useState(products);

  const handleSelectChange = (e: any) => {
    axios
      .get(`/products?limit=9&skip=0&sortBy=${e.target.value}&order=desc`)
      .then((items) => setItems(items.data.products));
  };

  return (
    <MainLayout title="Cửa hàng" contacts={siteInfo}>
      <GreenBackground name="Cửa hàng" breadcrumb="Trang chủ / Cửa hàng" />
      <div className={styles.selectWrapper}>
        <div className={styles.select}>
          <select name="sortBy" onChange={(e) => handleSelectChange(e)} defaultValue="name">
            <option value="name">Lọc theo tên</option>
            <option value="price">Lọc theo giá</option>
            <option value="sold">Bán chạy nhất</option>
          </select>
          <div className={styles.arrow}>
            <img src="/icons/up-and-down.svg" alt="up-and-down" />
          </div>
        </div>
      </div>
      <div className={styles.products}>
        {items.map((item: any, i: number) => {
          if (item.publish) {
            return (
              <ProductCard
                key={i}
                name={item.name}
                price={item.price}
                salePrice={item.salePrice}
                available={item.available}
                urlTitle={item.urlTitle}
              />
            );
          }
        })}
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const products = await axios.get('/products?limit=9&skip=0&sortBy=sold&order=desc');
  const siteInfo = await axios.get('/site/info');
  return {
    props: {
      products: products.data.products,
      siteInfo: siteInfo.data.site.siteInfo,
    },
    revalidate: 1,
  };
}
