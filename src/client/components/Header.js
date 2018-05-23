import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ isUserAuthenticated }) => {
  const authButton = isUserAuthenticated
    ? <a href="/api/logout">Logout</a>
    : <a href="/api/auth/google">Login</a>;

  return (
    <header>
      <nav className="nav-wrapper" style={{ paddingLeft: 20 }}>
        <Link to="/" href="null" className="brand-logo">
          React SSR
        </Link>
        <ul className="right">
          <li><Link to="/users" href="null">Users</Link></li>
          <li><Link to="/admin" href="null">Admin</Link></li>
          <li>{authButton}</li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  isUserAuthenticated: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape(),
  ]),
};

export default Header;
