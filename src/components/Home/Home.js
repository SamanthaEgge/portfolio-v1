import React from 'react'

import './Home.scss'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import Highlights from './Highlights.js'

import longBGHome from '../../assets/longbghome.jpg'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {

  }


  render() {
    return(
      <div className='home-container'>
        <div className='home-header'>
          <div className='home-summary'>
              <h3>Creative Full Stack Web Developer looking to stay on the cutting edge of technology and work with a passionate team of engineers.</h3>
          </div>
        </div>
  
        <div className='personal-details'>
          <div className='details-photo'>
            <img src =''></img>
          </div>
          <div className='details-information'>
            
          </div>
        </div>
        <Highlights />
        <Footer />
      </div>
      )
  }
}

export default Home;