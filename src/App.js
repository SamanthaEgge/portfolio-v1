import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.scss'
// import Navigation from './components/Navigation/Navigation'

import Home from './views/Home'
import About from './views/About'
import Blog from './views/Blog'
import Contact from './views/Contact'

const App = () => {
  return (
    <div className='portfolio-container'>
      {/* <Navigation /> */}
      {/* pass props to show home vs other pages,
          or use history to change this */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />  
        </Switch>
    </div>
  )
}

export default App;