import React from 'react';
import { Link } from 'react-router-dom';

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
    <nav className="mb-5">
      <div className="flex items-center justify-between pl-2 ring-4">
        <h2 className="text-3xl font-bold text-sky-500">Air pollution</h2>
        <ul className="flex justify-between pr-8 w-40">
          {links.map((link) => (
            <li className="text-base" key={link.id}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
