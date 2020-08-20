import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'

import './Project.scss'
import { FeaturedContext } from '../contexts/featured'

import HighlightItem from '../components/Highlight/HighlightItem'


// Sorts featured projects from backend
const sortPosition = (a, b) => {
  const featA = a[0].feature_position
  const featB = b[0].feature_position
  let comparison = 0;
  if (featA > featB) {
    comparison = 1
  } else if (featA < featB) {
    comparison = -1
  }
  return comparison
}

const Project = (props) => {
  const projects = useContext(FeaturedContext)
  console.log('CONTEXT-----',projects)

  return (
    <div className='project-container'>
      <div className='projects'>
        {projects === 'loading' || projects === 'initial' ? (
          <h1 style={{color:'white'}}>Loading</h1>
          ) : (
          projects.map((project) => {
            return <HighlightItem project={project} />
          })
        )}
      </div>
    </div>
  )
}

export default Project