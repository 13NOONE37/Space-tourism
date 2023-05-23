import React, { useEffect } from 'react';
import styles from './Home.module.css';
import { NavLink } from 'react-router-dom';

import Image1 from '../../assets/home/background-home-mobile.jpg';
import Image2 from '../../assets/home/background-home-tablet.jpg';
import Image3 from '../../assets/home/background-home-desktop.jpg';
export default function Home() {
  useEffect(() => {
    document.body.classList.add(styles['body--home']);

    return () => {
      document.body.classList.remove(styles['body--home']);
    };
  }, []);

  return (
    <>
      <div className="backgrounds">
        <picture>
          <source srcSet={Image3} media="(min-width: 1100px)" loading="lazy" />
          <source srcSet={Image2} msedia="(min-width: 375px)" loading="lazy" />
          <img src={Image1} alt="Background Image" loading="eager" />
        </picture>
      </div>
      <main className={styles.home}>
        <h1 className={styles['home--heading--1']}>
          So, you want to travel to
        </h1>
        <h2 className={styles['home--heading--2']}>Space</h2>
        <p className={styles['home--paragraph']}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <NavLink to={'/destination'} className={styles['home--cta']}>
          Explore
        </NavLink>
      </main>
    </>
  );
}
