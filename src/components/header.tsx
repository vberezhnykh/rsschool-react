import { NavLink } from 'react-router-dom';
import React from 'react';
import { HeaderProps } from '../types';

class Header extends React.Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
  }
  render() {
    return (
      <header className="header">
        <div className="header-container">
          <span>{this.props.page}</span>
          <nav className="navigation">
            <NavLink
              to={'/'}
              className={({ isActive }) => (isActive ? 'nav-list__item--active' : undefined)}
            >
              Main
            </NavLink>
            <NavLink
              to={'/about'}
              className={({ isActive }) => (isActive ? 'nav-list__item--active' : undefined)}
            >
              About
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
