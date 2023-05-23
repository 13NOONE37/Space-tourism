import React, { useEffect, useState } from 'react';
import styles from './Destination.module.css';

import Image1 from '../../assets/destination/background-destination-mobile.jpg';
import Image2 from '../../assets/destination/background-destination-tablet.jpg';
import Image3 from '../../assets/destination/background-destination-desktop.jpg';

import MoonImage from '../../assets/destination/image-moon.webp';
import MarsImage from '../../assets/destination/image-mars.webp';
import EuropaImage from '../../assets/destination/image-europa.webp';
import TitanImage from '../../assets/destination/image-titan.webp';

import data from '../../assets/data.json';

export default function Destination() {
  useEffect(() => {
    document.body.classList.add(styles['body--destination']);

    return () => {
      document.body.classList.remove(styles['body--destination']);
    };
  }, []);

  const [currentDestination, setCurrentDestination] = useState(0);

  return (
    <>
      <div className="backgrounds">
        <picture>
          <source srcSet={Image3} media="(min-width: 1100px)" loading="lazy" />
          <source srcSet={Image2} media="(min-width: 375px)" loading="lazy" />
          <img src={Image1} alt="Background Image" loading="eager" />
        </picture>
      </div>
      <main className={styles.destination}>
        <h1 className={styles['destination--heading--1']}>
          <span className={styles['destination--heading--1__gray']}>01</span>
          Pick your destination
        </h1>
        {/* <div className={styles.slider}>
        <div
          className={styles['slider--images']}
          style={{ '--destinationIndex': currentDestination + 1 }}
        > */}
        <img
          src={MoonImage}
          style={{ display: currentDestination === 0 ? 'block' : 'none' }}
          alt="Moon"
          loading="eager"
        />
        <img
          src={MarsImage}
          style={{ display: currentDestination === 1 ? 'block' : 'none' }}
          alt="Mars"
          loading="lazy"
        />
        <img
          src={EuropaImage}
          style={{ display: currentDestination === 2 ? 'block' : 'none' }}
          alt="Europa"
          loading="lazy"
        />
        <img
          src={TitanImage}
          style={{ display: currentDestination === 3 ? 'block' : 'none' }}
          alt="Titan"
          loading="lazy"
        />
        {/* </div>
      </div> */}
        <div className={styles.names}>
          {data.destinations.map(({ name }, index) => (
            <button
              onClick={() => setCurrentDestination(index)}
              className={`${styles['names--button']} ${
                index === currentDestination ? styles.active : ''
              }`}
            >
              {name}
            </button>
          ))}
        </div>
        {data.destinations.map(
          ({ name, description, distance, travel }, index) =>
            currentDestination === index && (
              <div className={styles['desc']} key={name}>
                <h2 className={styles['desc--name']}>{name}</h2>
                <p className={styles['desc--description']}>{description}</p>
                <div className={styles['desc--line']}></div>
                <div className={styles['desc--box']}>
                  <div className={styles['desc--info']}>
                    <h3>Avg. distance</h3>
                    <span>{distance}</span>
                  </div>
                  <div className={styles['desc--info']}>
                    <h3>Est. travel time</h3>
                    <span>{travel}</span>
                  </div>
                </div>
              </div>
            ),
        )}
      </main>
    </>
  );
}
