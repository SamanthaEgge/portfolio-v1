import React from 'react'

const HighlightItem = (props) => {
    return (
        <div className='hlitem-container'>
            <div className='hl-image'>
            </div>
            <div className='hl-content'>
                <h1>{props.feature_title}</h1>
            </div>
        </div>
    )
}

export default HighlightItem