import React from 'react'
import { Route } from 'react-router-dom'

import './App.scss'
import Home from './components/Home/Home'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div className='portfolio-container'>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
    </div>
  )
}

export default App;