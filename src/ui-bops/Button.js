import React from 'react'

const Button = ({ handleClick, size, color, label }) => {
    return (
        <div 
            className={`button ${size == 'small' ? 'small' : ''} ${color == 'secondary' ? 'secondary' : ''}`}
            onClick={handleClick}>
            {label}
        </div>
    )
}

export default Button