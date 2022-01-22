import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'HOME ',
    },
    {
      id: 2,
      path: '/detailsPage',
      text: 'DETAILS ',
    },
  ];
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <h2>Air pollution</h2>
        <ul className={styles.navbar_list}>
          {links.map((link) => (
            <li className={styles.linkTexts} key={link.id}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
