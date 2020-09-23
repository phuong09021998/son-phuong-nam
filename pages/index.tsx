import React from 'react';
import PageLayout from '../layouts/MainLayout';
import HomeCarousel from 'components/HomeCarousel';
import axios from 'config/axios';
interface Props {
  carousel: any;
}

export default function Home({ carousel }: Props) {
  return (
    <PageLayout>
      <HomeCarousel carousel={carousel} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const carousel = await axios.get('/site/carousel');
  return {
    props: {
      carousel: carousel.data.site.carousel,
    },
  };
}
