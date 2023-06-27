import React from 'react'
import "./styles.css"
const Spinner = ({ className }) => {
  return (
    <div className={`spinner ${className}`}>
      <div className="spinner-inner" />
    </div>
  )
}

export default Spinner