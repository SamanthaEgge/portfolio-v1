import React from 'react'
import axios from 'axios'

import './Home.scss'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import Highlights from './Highlights.js'
import HighlightItem from './HighlightItem.js'

import longBGHome from '../../assets/longbghome.jpg'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error = false,
      projects = []
    }
  }

  componentDidMount() {
    axios
      .get("https://portfolio-v1-be.herokuapp.com/features/featured"
      .then(events => {
        this.state.projects = events
      })
      .catch(error => {
        this.state.error = 'Failed to load projects'
      })
  }


  render() {
    return(
      <div className='home-container'>
        <div className='home-header'>
          <div className='home-summary'>
              <h2>'Hey, Im Samantha.'</h2>
              <h3>Creative Full Stack Web Developer looking to stay on the cutting edge of technology and work with a passionate team of engineers.</h3>
          </div>
        </div>
  
        {/* <div className='personal-details'>
          <div className='details-photo'>
            <img src =''></img>
          </div>
          <div className='details-information'>
            
          </div>
        </div> */}
        {/* <Highlights /> */}
        {this.state.higlights.length < 1 ? (
          <h1>Loading</h1>
        ) : this.state.highlights.map(project => {
          <HighlightItem project={project} />
        })} 
      </div>
      )
  }
}

export default Home;