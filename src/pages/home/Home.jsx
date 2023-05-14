import React from 'react';
import styles from './Home.module.css';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <main className={styles.home}>
      <h1 className={styles['home--heading--1']}>So, you want to travel to</h1>
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
  );
}
