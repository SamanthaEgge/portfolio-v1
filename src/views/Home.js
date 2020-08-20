import React from 'react'
import { Link } from 'react-router-dom';
// import Typing from 'react-typing-animation'
// TODO: Need to fix double print of typing animation while tabbing through the pages.

import './Home.scss'
import CTAButton from '../ui-bops/CTAButton.js'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-summary'>
        {/* <Typing.Delay ms={1000} /> */}
        {/* <Typing speed={80}><h2>Hey, I'm Sam</h2></Typing> */}
        <h2>Hey, I'm Sam</h2>
        <h3>Creative Full Stack Web Developer looking to stay on the cutting edge of technology and work with a passionate team of engineers.</h3>
        <div className='header-buttons'>
          <Link to='/about'><CTAButton label={'Contact Me'} size={'large'} color={'primary'} /></Link>
        </div>
        </div>
      <div className='home-image' />
    </div>
  )
}

export default Home