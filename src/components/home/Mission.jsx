import React from 'react'
import "./Mission.css";

function Mission() {
  return (
    <div className='mission-section'>
        

    <div className='mission container'>
            <h1>Vision and Mission</h1>
            <p>What are we doing, and why are we doing it.</p>
            <div className='row mt-4'>
                <div className='col-lg-4'>
                    <div className='card vision-card'>
                        <h3>Our Vision</h3>
                        <div className='vision-content'>
                        <p>Ensure high quality services to empower each and every individual by bringing out their innate ability to speak and communicate by providing the right stimulus at the right time without any geographical constraints</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-4'>
                    <div className='card vision-card'>
                        <h3>Our Mission</h3>
                        <div className='vision-content'>
                        <p>Ensure high quality services to empower each and every individual by bringing out their innate ability to speak and communicate by providing the right stimulus at the right time without any geographical constraints</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Mission
