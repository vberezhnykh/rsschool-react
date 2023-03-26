import { NavLink } from 'react-router-dom';
import React from 'react';
import { HeaderProps } from '../types';

const Header: React.FC<HeaderProps> = ({ page }) => {
  const navLinks = [
    {
      to: '/',
      text: 'Main',
    },
    {
      to: '/form',
      text: 'Form',
    },
    {
      to: '/about',
      text: 'About',
    },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <span>{page}</span>
        <nav className="navigation">
          {...navLinks.map((navLink) => (
            <NavLink
              key={navLink.text}
              to={navLink.to}
              className={({ isActive }) => (isActive ? 'nav-list__item--active' : undefined)}
            >
              {navLink.text}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
