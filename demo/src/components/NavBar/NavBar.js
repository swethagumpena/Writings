import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';

const NavBar = ({ isAdmin, isSignedIn }) => (
  <nav>
    <ul>
      <div className={styles.leftContent}>
        <Link to="/home">
          My Demo Application
        </Link>
      </div>
      <div className={styles.rightContent}>
        <Link to="/courses-list">
          Courses
        </Link>
        <Link to="/books-list">
          Books
        </Link>
        {isAdmin ? (
          <Link to="/admin-section">
            Admin
          </Link>
        ) : null}
        {isSignedIn ? (
          <button type="button" className={styles.button}>Logout</button>
        ) : (
          <button type="button" className={styles.button}>Login / Register</button>
        )}
      </div>
    </ul>
  </nav>
);

export default NavBar;

NavBar.defaultProps = {
  isAdmin: false,
  isSignedIn: false,
};

NavBar.propTypes = {
  isAdmin: PropTypes.bool,
  isSignedIn: PropTypes.bool,
};
