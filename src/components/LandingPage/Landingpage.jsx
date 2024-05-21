import React from 'react'
import './lpage.css'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import Gallery from './Gallery'
import Footer from '../Footer/Footer'
function Landingpage() {
  return (
    <>
    <Navbar/>
    
    <div className='container-box'>
     <div className='head-box'>
        <h2>Start Your</h2>
        <h1>Journey</h1>
     <Link to={'/auth'}>   <button className='startbtn'>Start</button></Link>
     </div>
    </div>
    
    
    
    <Gallery/>
    <Footer/>
      </>
  )
}

export default Landingpage