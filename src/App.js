import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.scss'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'

import Home from './components/Home/Home'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div className='portfolio-container'>
      <Navigation />
      {/* pass props to show home vs other pages,
          or use history to change this */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />  
        </Switch>
      <Footer />
    </div>
  )
}

export default App;