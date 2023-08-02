import React from 'react'

function PatientAppointmentCard() {
  return (
    <div className='container'>
            <div className='row' style={{alignItems:"center"}}>
                <div className='col col-lg-6'>
                        <div>
                            <img width={"200px"} height={"200px"} src={require("../../images/person.jpg")} alt='person'/>
                            <p>View Profile</p>
                        </div>
                </div>
                <div className='col col-lg-6'>
                        <p>Available Today</p>
                        <button>Book appointment</button>
                </div>
            </div>
    </div>
  )
}

export default PatientAppointmentCard
