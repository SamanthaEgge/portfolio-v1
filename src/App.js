import React from 'react'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'
import {TransitionGroup, CSSTransition } from 'react-transition-group'

import './App.scss'
import { FeatureProvider } from './contexts/featured'

import Navigation from './components/Navigation/Navigation'
import Home from './views/Home'
import Project from './views/Project'
import About from './views/About'
import Blog from './views/Blog'
import Contact from './views/Contact'

// Used for controlling the animation between pages
const AnimatedSwitch = (withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames='slide' timeout={1000}>
      <Switch location={location}>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Project} />
        <Route exact path='/about' component={About} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
)))


// // Sorts featured projects from backend
// const sortPosition = (a, b) => {
//   const featA = a[0].feature_position
//   const featB = b[0].feature_position
//   let comparison = 0;
//   if (featA > featB) {
//     comparison = 1
//   } else if (featA < featB) {
//     comparison = -1
//   }
//   return comparison
// }

const App = () => {
  // const [featured, setFeatured] = useState([])
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   axios
  //     .get(`https://portfolio-v1-be.herokuapp.com/api/feats/featured`)
  //     .then(featured => {
  //       console.log('WE IN APP', featured)
  //       let sorted = featured.data.featured.sort(sortPosition)
  //       setFeatured(sorted)
  //       setLoading(false)
  //       console.log('we in useEffect')
  //     })
  //     .catch(error => {
  //       setError(true)
  //       setLoading(false)
  //       console.log('we in catch')
  //       console.log(error)
  //     })
  // }, [])

  return (
    <container className='portfolio-container'>
      <BrowserRouter>
        <FeatureProvider>
          <nav className='navigation'>
              < Navigation />
          </nav>
          <AnimatedSwitch />
        </FeatureProvider>
      </BrowserRouter>
    </container>
  )
}

export default App;