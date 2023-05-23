import React, { useEffect, useState } from 'react';
import styles from './Technology.module.css';

import Image1 from '../../assets/technology/background-technology-mobile.jpg';
import Image2 from '../../assets/technology/background-technology-tablet.jpg';
import Image3 from '../../assets/technology/background-technology-desktop.jpg';

import Technology1Landscape from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import Technology1Portrait from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import Technology2Landscape from '../../assets/technology/image-space-capsule-landscape.jpg';
import Technology2Portrait from '../../assets/technology/image-space-capsule-portrait.jpg';
import Technology3Landscape from '../../assets/technology/image-spaceport-landscape.jpg';
import Technology3Portrait from '../../assets/technology/image-spaceport-portrait.jpg';

import data from '../../assets/data.json';

export default function Technology() {
  useEffect(() => {
    document.body.classList.add(styles['body--technology']);

    return () => {
      document.body.classList.remove(styles['body--technology']);
    };
  }, []);

  const [currentTechnology, setCurrentTechnology] = useState(0);

  return (
    <>
      <div className="backgrounds">
        <picture>
          <source srcSet={Image3} media="(min-width: 1100px)" loading="lazy" />
          <source srcSet={Image2} media="(min-width: 375px)" loading="lazy" />
          <img src={Image1} alt="Background Image" loading="eager" />
        </picture>
      </div>
      <main className={styles.technology}>
        <h1 className={styles['heading--1']}>
          <span className={styles['heading--1__gray']}>03</span>
          Space launch 101
        </h1>
        <picture>
          <source media="(min-width: 1100px)" srcSet={Technology1Portrait} />
          <img
            src={Technology1Landscape}
            alt={data.technology[0].name}
            style={{ display: currentTechnology === 0 ? 'block' : 'none' }}
          />
        </picture>
        <picture>
          <source media="(min-width: 1100px)" srcSet={Technology2Portrait} />
          <img
            src={Technology2Landscape}
            alt={data.technology[1].name}
            style={{ display: currentTechnology === 1 ? 'block' : 'none' }}
          />
        </picture>
        <picture>
          <source media="(min-width: 1100px)" srcSet={Technology3Portrait} />
          <img
            src={Technology3Landscape}
            alt={data.technology[2].name}
            style={{ display: currentTechnology === 2 ? 'block' : 'none' }}
          />
        </picture>
        {/* <img
        src={Technology1Landscape}
        style={{ display: currentTechnology === 0 ? 'block' : 'none' }}
        alt={data.technology[0].name}
      />
      <img
        src={Technology2Landscape}
        style={{ display: currentTechnology === 1 ? 'block' : 'none' }}
        alt={data.technology[1].name}
        loading="lazy"
      />
      <img
        src={Technology3Landscape}
        style={{ display: currentTechnology === 2 ? 'block' : 'none' }}
        alt={data.technology[2].name}
        loading="lazy"
      /> */}
        {/* <img
        src={`${Technology3Landscape}`}
        srcset={`${Technology3Landscape} 2x, ${Technology3Portrait} 2x`}
        sizes="(max-width: 1160px) 400px"
        style={{ display: currentTechnology === 2 ? 'block' : 'none' }}
        alt={data.technology[2].name}
      /> */}

        {data.technology.map(
          ({ name, description }, index) =>
            currentTechnology === index && (
              <div className={styles['technologyInfo']}>
                <span className={styles.dotes}>
                  <button
                    className={`${styles.dot} ${
                      currentTechnology === 0 ? styles['dot__active'] : ''
                    }`}
                    onClick={() => setCurrentTechnology(0)}
                  >
                    1
                  </button>
                  <button
                    className={`${styles.dot} ${
                      currentTechnology === 1 ? styles['dot__active'] : ''
                    }`}
                    onClick={() => setCurrentTechnology(1)}
                  >
                    2
                  </button>
                  <button
                    className={`${styles.dot} ${
                      currentTechnology === 2 ? styles['dot__active'] : ''
                    }`}
                    onClick={() => setCurrentTechnology(2)}
                  >
                    3
                  </button>
                </span>
                <span className={styles['technologyInfo--terminology']}>
                  The terminology...
                </span>
                <h2 className={styles['technologyInfo--name']}>{name}</h2>
                <p className={styles['technologyInfo--description']}>
                  {description}
                </p>
              </div>
            ),
        )}
      </main>
    </>
  );
}
