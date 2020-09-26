import React from 'react';
import PageLayout from '../layouts/MainLayout';
import HomeCarousel from 'components/HomeCarousel';
import WhyUs from 'components/WhyUs';
import AboutUs from 'components/AboutUs';
import Services from 'components/ServicesComponent';
import axios from 'config/axios';
import Projects from 'components/Projects';
import Products from 'components/Products';
interface Props {
  carousel: any;
  services: any;
  projects: any;
  products: any;
}

export default function Home({ carousel, services, projects, products }: Props) {
  return (
    <PageLayout title="Công ty TNHH MTV Xây Dựng Sơn Phương Nam">
      <HomeCarousel carousel={carousel} />
      <Services services={services} />
      <WhyUs />
      <AboutUs />
      <Projects projects={projects} />
      <Products products={products} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const carousel = await axios.get('/site/carousel');
  const services = await axios.get('/posts?type=service');
  const projects = await axios.get('/posts?type=project&sortBy=createdAt&limit=6&order=desc');
  const products = await axios.get('/products?limit=6&skip=0&sortBy=sold&order=desc');
  return {
    props: {
      carousel: carousel.data.site.carousel,
      services: services.data.posts,
      projects: projects.data.posts,
      products: products.data.products,
    },
  };
}
