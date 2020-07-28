import React from 'react'
import axios from 'axios'

import './Project.scss'

import HighlightItem from '../components/Highlight/HighlightItem'

class Project extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        error: false,
        projects: []
      }
    }

    sortPosition(a, b) {
      const featA = a[0].feature_position;
      const featB = b[0].feature_position;
      let comparison = 0;
      if (featA > featB) {
        comparison = 1;
      } else if (featA < featB) {
        comparison = -1;
      }
      return comparison;
    }

    componentDidMount() {
        console.log('we mountin')
        axios
          .get("https://portfolio-v1-be.herokuapp.com/api/feats/featured")
          .then(events => {
            let sorted = events.data.featured.sort(this.sortPosition)
            this.setState({ projects: sorted })
          })
          .catch(error => {
            this.setState({ error: error })
          })
      }

    render () {
        return(
            <div>
                {this.state.projects.length < 1 ? (
            <h1>Loading</h1>
          ) : (
            this.state.projects.map((project) => {
            return <HighlightItem project={project} />
          })
        )}  
            </div>
        )
    }
}

export default Project