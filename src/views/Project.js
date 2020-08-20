import React, { useContext } from 'react'
import Loader from 'react-loader-spinner'

import './Project.scss'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { FeaturedContext } from '../contexts/featured'

import HighlightItem from '../components/Highlight/HighlightItem'

const Project = () => {
  const projects = useContext(FeaturedContext)

  return (
    <div className='project-container'>
      <div className='projects'>
        {projects === 'loading' || projects === 'initial' ? (
          <Loader
            type="TailSpin"
            color="#FFFFFF"
            height={100}
            width={100}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%'
            }}
             />
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