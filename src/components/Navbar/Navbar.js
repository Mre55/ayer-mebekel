import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home ',
    },
    {
      id: 2,
      path: '/detailsPage',
      text: 'Details ',
    },
  ];
  return (
    <nav>
      <div>
        <h2>Air pollution</h2>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
