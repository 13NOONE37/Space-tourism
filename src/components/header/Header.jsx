import React, { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/shared/logo.svg';
import { ReactComponent as Hamburger } from '../../assets/shared/icon-hamburger.svg';
import { ReactComponent as Close } from '../../assets/shared/icon-close.svg';
import { NavLink, useLocation } from 'react-router-dom';
import paths from '../../pages/Paths';

const Header = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const navbarRef = useRef(null);

  const handleNavbar = (e) => {
    if (
      !showMobileNavbar ||
      !navbarRef.current ||
      navbarRef.current.contains(e.target)
    ) {
      return;
    }
    setShowMobileNavbar(false);
  };
  useEffect(() => {
    document.addEventListener('click', handleNavbar);

    return () => {
      document.removeEventListener('click', handleNavbar);
    };
  }, [showMobileNavbar]);

  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <NavLink to={'/home'} aria-label="Go back to home page">
        <Logo className={styles['header--logo']} />
      </NavLink>
      <div className={styles['header--line']}></div>

      <button
        className={styles['header--hamburger']}
        onClick={(e) => {
          e.stopPropagation();
          setShowMobileNavbar(true);
        }}
      >
        <Hamburger />
      </button>
      <nav
        className={`${styles['header--nav']} ${
          !showMobileNavbar ? styles['header--nav__hide'] : ''
        }`}
        ref={navbarRef}
      >
        <button
          className={styles['header--nav--close']}
          onClick={() => setShowMobileNavbar(false)}
        >
          <Close />
        </button>
        <ul>
          {paths.map(
            ({ path }, index) =>
              index > 0 && (
                <li
                  className={`${styles['nav--item']} ${
                    path === pathname ? styles['nav--item__active'] : ''
                  }  navtext`}
                  key={path}
                >
                  <NavLink to={path}>
                    <span className={styles['nav--item__bold']}>
                      0{index - 1}
                    </span>{' '}
                    {path.replace('/', '')}
                  </NavLink>
                </li>
              ),
          )}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
