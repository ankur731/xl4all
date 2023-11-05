import React from 'react'
import "./Who.css";

function Who() {
  return (
    <div className='who' id='about'>
        <img className='star' src={require("../../assets/star-removebg-preview.png")} alt='star' />

   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#021138" fill-opacity="1" d="M0,64L80,85.3C160,107,320,149,480,154.7C640,160,800,128,960,117.3C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
        <div className='container whoDiv'>
            <div className='row justify-content-around'>
                <div className='col-md-5 who-left'>
                    <img src={require("../../assets/who.jpg")} alt='whoImg'/>
                </div>
                <div className='col-md-6 who-right'>
                    <h3>Who We Are ?</h3>
                    <h5>We are a consortium of highly qualified speech pathologists and therapists with an aim to offer the best quality therapy services at a most affordable price and bring about a difference in the life of therapy seekers and their families </h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Who
