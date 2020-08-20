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

  const [featured, setFeatured] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://portfolio-v1-be.herokuapp.com/api/feats/featured`)
      .then(featured => {
        // console.log(featured)
        let sorted = featured.data.featured.sort(sortPosition)
        setFeatured(sorted)
        setLoading(false)
        // console.log('we in useEffect')
      })
      .catch(error => {
        setError(true)
        setLoading(false)
        // console.log('we in catch')
        // console.log(error)
      })
  }, [])

  console.log(featured)
  console.log('PROPS.FEATURED', props)
  return (
    <div className='project-container'>
      <div className='projects'>
        {featured.length < 1 ? (
          <h1>Loading</h1>
          ) : (
          featured.map((project) => {
            return <HighlightItem project={project} />
          })
        )}
      </div>
    </div>
  )
}

export default Project