import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss'

const Navigation = () => {
  return(
    <div className='navigation-container'>
      <div className='navigation-bar'>
        <div className='title'><h1>Samantha Egge</h1></div>
        <div className='nav-items'>
          <Link className='nav-link' to='/about'> Info</Link> <span>|</span>
          <Link className='nav-link' to='/blog'>Blog</Link> <span>|</span>
          <Link className='nav-link' to='/contact' >Contact</Link> <span>|</span>
        </div>
      </div>
    </div>
  )
}

export default Navigation;