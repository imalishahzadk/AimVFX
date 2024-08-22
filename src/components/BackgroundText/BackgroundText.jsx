import React from 'react'

const BackgroundText = ({children, className}) => {
  return (
    <div
    className={` ${className}`}>
        {children}
    </div>
  )
}

export default BackgroundText