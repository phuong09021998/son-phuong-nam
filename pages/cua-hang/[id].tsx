import React from 'react';
import axios from 'config/axios';

export default function ShopItem({ productData }: any) {
  console.log(productData);
  return <div>shop item ne</div>;
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
  };
}
