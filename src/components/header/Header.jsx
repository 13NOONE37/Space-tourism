import React, { useState, useRef } from 'react';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/shared/logo.svg';

const Header = () => {
  const [leftOffset, setLeftOffset] = useState(0);
  const ulElement = useRef(null);
  const handleMoveIndicator = (e) => {
    const ulSizes = ulElement.current.getBoundingClientRect();

    const { left, width } = e.currentTarget.getBoundingClientRect();
    console.log(ulSizes, left, width);
  };
  return (
    <header className={styles.header}>
      <Logo className={styles['header--logo']} />
      <div className={styles['header--line']}></div>
      <nav className={styles['header--nav']}>
        <ul ref={ulElement}>
          <li
            className={`${styles['nav--item']} navtext`}
            onMouseEnter={handleMoveIndicator}
          >
            <span className={styles['nav--item__bold']}>00</span> Home
          </li>
          <li
            className={`${styles['nav--item']} navtext`}
            onMouseEnter={handleMoveIndicator}
          >
            <span className={styles['nav--item__bold']}>01</span> Destination
          </li>
          <li
            className={`${styles['nav--item']} navtext`}
            onMouseEnter={handleMoveIndicator}
          >
            <span className={styles['nav--item__bold']}>02</span> Crew
          </li>
          <li
            className={`${styles['nav--item']} navtext`}
            onMouseEnter={handleMoveIndicator}
          >
            <span className={styles['nav--item__bold']}>03</span> Technology
          </li>
          <li className={styles.indicator} style={{ left: leftOffset }}></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
