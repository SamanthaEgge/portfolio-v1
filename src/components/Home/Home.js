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
      error: false,
      projects: []
    }
  }

  componentDidMount() {
    console.log('we mountin')
    axios
      .get("https://portfolio-v1-be.herokuapp.com/api/feats/featured")
      .then(events => {
        this.setState({ projects: events })
      })
      .catch(error => {
        this.setState({ error: error })
      })
  }


  render() {
    console.log('PROJECTS',this.state.projects)
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
        {this.state.projects.length < 1 ? (
            <h1>Loading</h1>
          ) : (
            this.state.projects.data.featured.map((project) => {
            return <HighlightItem {...this.props} project={project} />
          })
        )} 
      </div>
      )
  }
}

export default Home;