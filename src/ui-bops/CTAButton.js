import React from 'react'

const CTAButton = ({ handleClick, size, color, label }) => {
    return (
        <div 
            className={`button ${size == 'medium' ? 'medium' : ''} ${color == 'secondary' ? 'secondary' : ''}`}
            onClick={handleClick}>
            {label}
        </div>
    )
}

export default CTAButton