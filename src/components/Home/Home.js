import React from 'react'

import './Home.scss'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

import longBGHome from '../../assets/longbghome.jpg'

const Home = () => {

  return(
    <div className='home-container'>
      <>
      <div className='home-nav'>
        <Navigation /> 
        {/* pass props to show home vs other pages,
        or use history to change this */}
      </div>
      <div className='home-header'>
        <div className='image-holder'> 
          <img src={longBGHome} />
        </div>
        <div className='home-summary'>
            <h3>Full Stack Web Developer looking to design applications to make your job easier</h3>
        </div>
      </div>
      </>

      <div className='personal-details'>
        <div className='details-photo'>
          <img src =''></img>
        </div>
        <div className='details-information'>
          
        </div>
      </div>
      <div className='portfolio-highlights'>
        
      </div>
      <Footer />
    </div>
    )
}

export default Home;