import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

// Used for sorting featured data
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

export const FeaturedContext = createContext(null)

export const FeatureProvider = ({ children }) => {
  const [featured, setFeatured] = useState('initial')

  useEffect(() => {
    setFeatured('loading')
    axios
      .get(`https://portfolio-v1-be.herokuapp.com/api/feats/featured`)
      .then(featured => {
        let sorted = featured.data.featured.sort(sortPosition)
        setFeatured(sorted)
      })
      .catch(error => {
        setFeatured(error)
      })
  }, [])

  return (
      <FeaturedContext.Provider value={featured}>
        {children}
      </FeaturedContext.Provider>
  )
}