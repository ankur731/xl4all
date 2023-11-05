import React from 'react'
import "./Therepist.css"

function Therepist() {
    return (
        <div className='therepist-section'>
            {/* <div className='mission-img'>
    <img src={require("../assets/we.jpg")} alt='mission'/>
</div> */}
            <div className='container therepist-div' style={{ padding: '0', paddingTop: "25px" }}>
                <h1>Our Therapist</h1>
                <div className='row mt-3'>
                    <div className='col-lg-5 therepist-left'>
                        <img src={require("../../assets/who.jpg")} alt='therepist' />
                    </div>

                    <div className='col-lg-5 therepist-right'>
                        <p>All our therapists come with more than 5 years of experience in traditional speech therapy (experienced in both offline and online therapy) along with mastery in alternative therapies and methodologies such as prompt therapy, articulation therapy, oromotor stimulation, use of augmented communication devices etc. We maintain absolute transparency about the credentials and competency of our therapists, and you can review the same before booking a session with them. </p>
                    </div>

                </div>
            </div>
            <div className='child-img-container'>
                <img className='children-img' src={require("../../assets/children.png")} alt='child' />
            </div>
        </div>
    )
}

export default Therepist
