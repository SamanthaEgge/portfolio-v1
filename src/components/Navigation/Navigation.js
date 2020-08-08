import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss'

const Navigation = () => {
  return(
    <div className='navigation-container'>
      <div className='nav-left'>
        <Link className='title' to='/'><h1>Samantha Egge</h1></Link>
      </div>
      <div className='nav-right'>
        <div className='nav-items'>
          <Link className='nav-link' to='/projects'> Projects</Link>
          <Link className='nav-link' to='/blog'>Blog</Link>
          <Link className='nav-link' to='/about'>About</Link>
          <Link className='nav-link' to='/contact' >Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation;