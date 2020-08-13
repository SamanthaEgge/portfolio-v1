import React from 'react'
import { Link } from 'react-router-dom';
import Typing from 'react-typing-animation'

import './Home.scss'
import Navigation from '../components/Navigation/Navigation.js'
import CTAButton from '../ui-bops/CTAButton.js'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
      projects: []
    }
  }

  render() {
    return(
      <div className='home-container'>
        <div className='navigation'>
          <Navigation />
        </div>
        <div className='home-summary'>
          <Typing.Delay ms={100000} />
          <Typing speed={80}><h2>Hey, I'm Sam</h2></Typing>
          <h3>Creative Full Stack Web Developer looking to stay on the cutting edge of technology and work with a passionate team of engineers.</h3>
          <div className='header-buttons'>
            <Link to='/about'><CTAButton label={'Contact Me'} size={'large'} color={'primary'} /></Link>
          </div>
         </div>
        <div className='home-image' />
      </div>
      )
  }
}

export default Home