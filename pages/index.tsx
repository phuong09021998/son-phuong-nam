import React from 'react';
import PageLayout from '../layouts/MainLayout';
import HomeCarousel from 'components/HomeCarousel';
import WhyUs from 'components/WhyUs';
import AboutUs from 'components/AboutUs';
import Services from 'components/ServicesComponent';
import axios from 'config/axios';
interface Props {
  carousel: any;
}

export default function Home({ carousel }: Props) {
  return (
    <PageLayout>
      <HomeCarousel carousel={carousel} />
      <WhyUs />
      <AboutUs />
      <Services />
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
