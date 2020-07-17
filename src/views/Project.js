import react from 'react'

import 'Project.scss'

class Project extends React.Component {
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
