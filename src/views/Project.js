import React, { useContext } from 'react'

import './Project.scss'
import { FeaturedContext } from '../contexts/featured'

import HighlightItem from '../components/Highlight/HighlightItem'

const Project = () => {
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