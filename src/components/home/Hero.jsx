import React from 'react'
import "./Hero.css";
import { Navigate, useNavigate } from 'react-router-dom';
  
function Hero() {
  const navigate = useNavigate();

  
  const goToAdmin = () => {
    navigate("/admin")
  }
  const goToPatient = () => {
    navigate("/patient")
  }
  const goToTherepist = () => {
    navigate("/therepist")
  } 
  
  return (
    <div className='hero' id='home'>
            <h1>Speech and Language Therapy - <span>reimagined</span></h1>
      <p>engaging, cost-effective, flexible, data-driven.</p>
      <div className='learn-btn-div'>
            <button onClick={goToPatient}  className='learn-more-btn'>Patient</button>
            <button onClick={goToTherepist}  className='learn-more-btn'>Therepist</button>
            <button onClick={goToAdmin}  className='learn-more-btn'>Admin</button>

      </div>
            {/* <img className='logo' src={require("../assets/logo.png")} alt='logo' /> */}
            
    </div>
  )
}

export default Hero
