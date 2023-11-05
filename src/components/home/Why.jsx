import React from 'react'
import "./Why.css"

function Why() {
  return (
    <div className='why'>
   
<img className='sun' src={require("../../assets/sun-removebg-preview.png")} alt='sun' />
      <div className='container whyDiv'>
        {/* <h1>Why We ?</h1> */}
        <h2>What we do</h2>
        <h1>Why choose us</h1>
        <div className='row mt-5'>
            <div className='col-lg-4 mb-4'>
                <div className='card why-card'>
                    <img src={require("../../assets/car.png")} alt='card'/>
                    <h5>Fluency Disorder</h5>
                    <p>Lorem ipsum lorem ipsum lorem ipusum lorem ipsum</p>

                </div>
            </div>
            <div className='col-lg-4 mb-4'>
                <div className='card why-card'>
                    <img src={require("../../assets/info-icon2.png")} alt='card'/>
                    <h5>Fluency Disorder</h5>
                    <p>Lorem ipsum lorem ipsum lorem ipusum lorem ipsum</p>

                </div>
            </div>
            <div className='col-lg-4 mb-4'>
                <div className='card why-card'>
                    <img src={require("../../assets/info-icon3.png")} alt='card'/>
                    <h5>Fluency Disorder</h5>
                    <p>Lorem ipsum lorem ipsum lorem ipusum lorem ipsum</p>

                </div>
            </div>
            
        </div>
        <div className='row mt-5 py-5 justify-content-around'>
            <div className='col-lg-5 why-left'>
                <img src={require("../../assets/why.jpg")} alt='whyimg' />
            </div>
            <div className='col-lg-6 why-right '>
            <h3>Why We?</h3>
                <h5>Our unique custom methodology blends patient training with parental training on practical approaches to create numerous opportunities for the speech and communication in day to day life thereby ensuring the maximum stimulus at the right age.We help set short term and realistic goals and devise strategies to fulfil them with the relevant science based methodologies such as best of traditional verbal and non verbal communication & speech therapy,prompt therapy and many more</h5>
            </div>
        </div>
      </div>
    
    </div>
  )
}

export default Why
