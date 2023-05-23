import React, { useEffect, useState } from 'react';
import styles from './Crew.module.css';

import Image1 from '../../assets/crew/background-crew-mobile.jpg';
import Image2 from '../../assets/crew/background-crew-tablet.jpg';
import Image3 from '../../assets/crew/background-crew-desktop.jpg';

import Person1 from '../../assets/crew/image-douglas-hurley.webp';
import Person2 from '../../assets/crew/image-mark-shuttleworth.webp';
import Person3 from '../../assets/crew/image-victor-glover.webp';
import Person4 from '../../assets/crew/image-anousheh-ansari.webp';

import data from '../../assets/data.json';

export default function Crew() {
  useEffect(() => {
    document.body.classList.add(styles['body--crew']);

    return () => {
      document.body.classList.remove(styles['body--crew']);
    };
  }, []);
  const [currentCrew, setCurrentCrew] = useState(0);

  return (
    <>
      <div className="backgrounds">
        <picture>
          <source srcSet={Image3} media="(min-width: 1100px)" loading="lazy" />
          <source srcSet={Image2} media="(min-width: 375px)" loading="lazy" />
          <img src={Image1} alt="Background Image" loading="eager" />
        </picture>
      </div>
      <main className={styles.crew}>
        <h1 className={styles['heading--1']}>
          <span className={styles['heading--1__gray']}>02</span>
          Meet your crew
        </h1>
        <img
          src={Person1}
          style={{ display: currentCrew === 0 ? 'block' : 'none' }}
          alt={data.crew[0].name}
        />
        <img
          src={Person2}
          style={{ display: currentCrew === 1 ? 'block' : 'none' }}
          alt={data.crew[0].name}
        />
        <img
          src={Person3}
          style={{ display: currentCrew === 2 ? 'block' : 'none' }}
          alt={data.crew[0].name}
        />
        <img
          src={Person4}
          style={{ display: currentCrew === 3 ? 'block' : 'none' }}
          alt={data.crew[0].name}
        />
        <div className={styles.line}></div>
        {data.crew.map(
          ({ role, name, bio }, index) =>
            currentCrew === index && (
              <div className={styles['pilotInfo']}>
                <span className={styles.dotes}>
                  <button
                    className={`${styles.dot} ${
                      currentCrew === 0 ? styles['dot__active'] : ''
                    }`}
                    onClick={() => setCurrentCrew(0)}
                  ></button>
                  <button
                    className={`${styles.dot} ${
                      currentCrew === 1 ? styles['dot__active'] : ''
                    }`}
                    onClick={() => setCurrentCrew(1)}
                  ></button>
                  <button
                    className={`${styles.dot} ${
                      currentCrew === 2 ? styles['dot__active'] : ''
                    }`}
                    onClick={() => setCurrentCrew(2)}
                  ></button>
                  <button
                    className={`${styles.dot} ${
                      currentCrew === 3 ? styles['dot__active'] : ''
                    }`}
                    onClick={() => setCurrentCrew(3)}
                  ></button>
                </span>
                <span className={styles['pilotInfo--role']}>{role}</span>
                <h2 className={styles['pilotInfo--name']}>{name}</h2>
                <p className={styles['pilotInfo--bio']}>{bio}</p>
              </div>
            ),
        )}
      </main>
    </>
  );
}
