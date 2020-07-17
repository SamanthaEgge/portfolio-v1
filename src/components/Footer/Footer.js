import React from "react";
import { Link } from 'react-router-dom';

import './Footer.scss'

const Footer = ( ) => {
  return(
    <div className='footer-container'>
      <div className='footer-nav'>
        <span className='footer-scroll'>^</span>
        <a href="https://github.com/SamanthaEgge"><i class="fab fa-github"></i></a>
        <a href="https://twitter.com/SamanthaEgge"><i class="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/samantha-egge/"><i class="fab fa-linkedin"></i></a>
      </div>
      <div className='footer-copyright'>
        <p>Copyright Samantha Egge cica 2020</p>
      </div>
    </div>
  )
}

export default Footer;