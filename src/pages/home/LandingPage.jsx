import React from 'react'
import Navbar from '../../components/home/Navbar'
import Hero from '../../components/home/Hero'
import Why from '../../components/home/Why'
import Who from '../../components/home/Who'
import Program from '../../components/home/Program'
import Mission from '../../components/home/Mission'
import Therepist from '../../components/home/Therepist'
// import Footer from '../components/home/Footer'
import Footer from "../../components/home/Footer"

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Who />
      <Why/>
      <Program />
      <Mission />
      <Therepist />
      <Footer />
      
    </div>
  )
}

export default LandingPage
