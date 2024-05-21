import React from 'react'
import './nav.css'
function Navbar() {
  return (
    <>
 <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title ms-5">
          Sports Manager
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      
      <div className="nav-links">
        <a href=""  rel="noopener noreferrer">Home</a>
        <a href=""  rel="noopener noreferrer">About</a>
        
        <a href="/auth">login</a>
     
      </div>
    </div>
    </>
  )
}

export default Navbar