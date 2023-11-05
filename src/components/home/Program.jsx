import React from 'react'
import "./Program.css"
import Lottie from 'lottie-react'
import animationData from "../../assets/animation_lmamnh83.json";

function Program() {
    return (
        <div className='program-section' id='program'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fdf5f2" fill-opacity="1" d="M0,96L60,90.7C120,85,240,75,360,90.7C480,107,600,149,720,154.7C840,160,960,128,1080,117.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
            <div className='program container'>
                <h1>Program Structure</h1>
                <div className='row mt-4 py-2 align-items-center'>
                    <div className='col-2 col-sm-2 col-xl-1 program-left'>
                        <img src={require("../../assets/one.png")} alt='one' />
                    </div>
                    <div className='col-sm-10 program-right'>
                        <h5>
                            Weekly 30 mins online session individualised for the therapry seeker that includes 20 mins of 1X1 session with the therapy seeker and 10  mins of caretaker/parental advisory session for 4 weeks a month along with weekly video review of caretaker performing therapy with the student
                        </h5>
                    </div>
                </div>
                <div className='row py-3 align-items-center'>
                    <div className='col-2 col-sm-2 col-xl-1 program-left'>
                        <img src={require("../../assets/two.png")} alt='one' />
                    </div>
                    <div className='col-sm-10 program-right'>
                        <h5>
                            Access to a qualified speech therapists on whatsApp and facebook group for urgent queries and concerns
                        </h5>
                    </div>
                </div>
                <div className='row py-3 align-items-center'>
                    <div className='col-2 col-sm-2 col-xl-1 program-left'>
                        <img src={require("../../assets/3.png")} alt='one' />
                    </div>
                    <div className='col-sm-10 program-right'>
                        <h5>
                            Access to all the therapy session recordings, materials,printables and demo videos specific to the activities for the week inorder to achieve the short term goal in a highly organized portal/mobile app and accessible until you are a member with us
                        </h5>
                    </div>
                </div>
                <div className='row py-3 align-items-center'>
                    <div className='col-2 col-sm-2  col-xl-1 program-left'>
                        <img src={require("../../assets/4.png")} alt='one' />
                    </div>
                    <div className='col-sm-10 program-right'>
                        <h5>
                            Dashboard to review the progress time to time against the goals. than words' etc Ability to book therapists among a pool of highly qualified therapists without having a dependency on a single therapist.
                        </h5>
                    </div>
                </div>
                <div className='row py-3 align-items-center'>
                    <div className='col-2 col-sm-2 col-xl-1 program-left'>
                        <img src={require("../../assets/5.png")} alt='one' />
                    </div>
                    <div className='col-sm-10 program-right'>
                        <h5>
                            Ability to perform activities and track status using an easy to use
                            platform/mobile app.
                        </h5>
                    </div>
                </div>
                <div className='row py-3 align-items-center'>
                    <div className='col-2 col-sm-2 col-xl-1 program-left'>
                        {/* <Lottie animationData={animationData}/> */}
                        <img src={require("../../assets/confetti.png")} alt='one' />
                    </div>
                    <div className='col-sm-10 program-right'>
                        <h5>
                        All this is just for 80 USD per month! which is just 20 USD per week! You don't believe us, take one month free service(available for the first 20 action takers every month. Hurry up & register NOW!!!).
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Program
