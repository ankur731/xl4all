import React, { useState } from 'react'
import "./AppointmentCard.css";
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { toast } from 'react-toastify';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';


function EnquiryCard(props) {

 


  function appointmentCardClicked() {
   
    window.location.href="patient/patient-detail";
  }
  return (
<>
    <div className='row appointmentCard' >
      <div className='col col-xs-12 col-md-5  imgContent' onClick={appointmentCardClicked}>

        <div className='therepistImgDiv' >
          <img className='therepistImg' src={require("../../images/person.jpg")} alt='appimg' />
        </div>
        <div className='therepistContent'>
          <h5 >Emilia Winson</h5>
          <p>London, UK</p>
          {/* {props.admin&&<p><BusinessCenterOutlinedIcon /> 10+ years</p>} */}
        </div>

      </div>
      <div className='col col-xs-12 col-md-6 row btnGroup ' >
          <div className="dateTime-btn col-12 ">
              <p><DateRangeIcon style={{fill:"#7457fb"}}/> 19 July 2023</p>
              <p><AccessTimeOutlinedIcon style={{fill:"#f27d58"}}/> 12:00 PM</p>
          </div>

         
        <div className='row col-12 bottomBtnDiv justify-content-between'  >

       
        <div style={{color:"#fff"}} className="action-btn approve-btn col-5">Approve 
        </div>
       
          <div className=" join-btn disapprove-btn col-6">Disapprove</div>
          </div>
      </div>
    </div>
   
    </>
  )
}

export default EnquiryCard
