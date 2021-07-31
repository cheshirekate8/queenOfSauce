import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { GiFarmTractor } from 'react-icons/gi';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div>
        <NavLink to="/login" className='navLinks'>Login</NavLink>
        <NavLink to="/signup" className='navLinks'>Sign Up</NavLink>
      </div>
    );
  }

  return (
    <nav>
      <NavLink exact to="/" className='navLinks'>
        <GiFarmTractor />
      </NavLink>
      {isLoaded && sessionLinks}
    </nav>
  );
}

export default Navigation;
