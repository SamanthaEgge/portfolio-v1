import React from 'react'
// import { Link } from 'react-router-dom'

import './HighlightItem.scss'
// import Button from '../../ui-bops/Button.js'


const HighlightItem = ({project}) => {
  let feature = project[0]

  // splitting the Json summary into usable pieces for display
  let content = feature.feature_summary.split("[l] [b]")
  let description = content[0]
  let bullets = content.slice(1)

  // Checking if inverted row for projects
  let inverted = feature.feature_position % 2

    return (
        <div className={`hlitem-container ${inverted === 1 ? "" : "reverse"}`}>
            <div className='hl-image'>
              <img src={feature.feature_photo} alt={feature.feature_title} />
            </div>
            <div className={`hl-content ${inverted === 1 ? "" : "reverse"}`}>
              <span className='hl-title'>{feature.feature_title}</span> <br />
              <div className='hl-skills'>{feature.skills.map(skill => {
                return <div className='skill-box'>{skill}</div>
              })}</div>
              <p className='hl-description'>{description}</p>
              <ul>
                {bullets.map(bullet => {
                  return (<><li><span className='bullet'>></span> {bullet}</li></>)
                })}
              </ul>
              <div className='hl-links'>
                {feature.feature_website ? <a href={feature.feature_website} target="_blank" rel="noopener noreferrer"><i className="fas fa-globe"></i></a>: null}
                {feature.feature_github ? <a href={feature.feature_github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>: null}
                {/* {feature.blog_slug ? <Link className='' to={`/blog/${feature.blog_slug}`}><Button  /></Link>: null} */}
              </div>
            </div>
        </div>
    )
}

export default HighlightItem

