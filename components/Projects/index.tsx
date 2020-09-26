import React from 'react';
import styles from './Projects.module.scss';
import ProjectCard from 'components/ProjectCard';
import SeeMore from '../SeeMoreButton';

export default function Projects({ projects }: any) {
  return (
    <div className={styles.projects}>
      <div className={styles.title}>DỰ ÁN MỚI NHẤT</div>
      <div className={styles.cardsWrapper}>
        {projects.map((item: any, i: number) => {
          if (item.publish) {
            return <ProjectCard title={item.title} data={item.date} urlTitle={item.urlTitle} key={i} index={i} />;
          }
        })}
      </div>
      <SeeMore link="/du-an" />
    </div>
  );
}
