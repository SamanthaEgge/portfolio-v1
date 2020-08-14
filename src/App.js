import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.scss'
import Navigation from './components/Navigation/Navigation'

import Home from './views/Home'
import Project from './views/Project'
import About from './views/About'
import Blog from './views/Blog'
import Contact from './views/Contact'

const App = () => {
  return (
    <container className='portfolio-container'>
      <nav className=''>
        < Navigation />
      </nav>
      {/* pass props to show home vs other pages,
          or use history to change this */}
      <div className='content'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/projects' component={Project} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />  
        </Switch>
      </div>
    </container>
  )
}

export default App;