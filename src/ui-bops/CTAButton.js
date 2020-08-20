import React from 'react'

import './CTAButton.scss'

const CTAButton = (props) => {
    return (
        <div 
            className={`cta-button ${props.size === 'medium' ? 'medium' : ''} ${props.color === 'secondary' ? 'secondary' : ''}`}>
            <span>{props.label}</span>
        </div>
    )
}

export default CTAButton