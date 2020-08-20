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

const App = () => {

  return (
    <div className='portfolio-container'>
      <BrowserRouter>
        <FeatureProvider>
          <nav className='navigation'>
              < Navigation />
          </nav>
          <AnimatedSwitch />
        </FeatureProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;