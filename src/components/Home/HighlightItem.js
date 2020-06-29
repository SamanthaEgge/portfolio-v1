import React from 'react'

import './HighlightItem.scss'

const HighlightItem = ({project}) => {
  console.log(project)
  // console.log('ID', id)
  let feature = project[0]

  // splitting the Json summary into usable pieces for display
  let content = feature.feature_summary.split("[l] [b]")
  let description = content[0]
  let bullets = content.slice(1)

  // Checking if inverted row for projects
  let inverted = feature.feature_position % 2

    return (
        <div className={`hlitem-container ${inverted == 0 ? "" : "reverse"}`}>
            <div className='hl-image'>
              <img src={feature.feature_photo} alt={feature.feature_title} />
            </div>
            <div className='hl-content'>
              <span className='hl-title'>{feature.feature_title}</span> <br />
              <span className='hl-skills'>React, Node.js, Express, Redux, Hooks</span>
              <p className='hl-description'>{description}</p>
              <ul>
                {bullets.map(bullet => {
                  return (<><li><span className='bullet'>></span> {bullet}</li></>)
                })}
              </ul>
            </div>
        </div>
    )
}

export default HighlightItem