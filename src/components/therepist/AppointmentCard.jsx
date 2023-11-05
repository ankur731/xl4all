import React, { useState } from 'react'
import "./AppointmentCard.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ActivityPage from '../ActivityPage';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';


function AppointmentCard(props) {
  const navigate = useNavigate();

  const [action, setAction] = useState(false);
  const [activity, setActivity] = useState(false);
  const handleClick = (status) => {
    if(status==="upcoming") {
      setAction(!action);
    }
    else {
      // if(props.appointmentPage) {
      //   setActivity(!activity);
      // }
       if(props.type==="therepist") {
        navigate("/therepist/patient/patient-detail");
      }
      else{
        setActivity(!activity);
      }
    }
  };


  function appointmentCardClicked() {
    var type;
    if(props.type==="therepist"){
      navigate("/patient/therepist/therepist-detail")
        // type = "patient/therepist/therepist-detail";
      }
    
    else {
      navigate("/therepist/patient/patient-detail")

      // type = "therepist/patient/patient-detail";
    }
    // window.location.href=`/${type}`;
  }
  return (
<>
    <div className='row  appointmentCard align-items-center' style={{padding:"0 10px"}}>
      <div className='col col-xs-12 col-sm-12  col-md-6  col-lg-5  imgContent' >

        <div className='therepistImgDiv' onClick={appointmentCardClicked}>
          <img className='therepistImg' src={require("../../images/person.jpg")} alt='appimg' />
        </div>
        <div className='therepistContent'>
          <h5 onClick={appointmentCardClicked}>Emilia Winson</h5>
          <p>London, UK</p>
          {props.type==='therepist'&&<p><BusinessCenterOutlinedIcon /> 10+ years</p>}
          
        </div>

      </div>
      <div className='col  col-xs-12 col-sm-12 col-md-5  col-lg-6 row btnGroup '  id='btngrp' >
          <div className="dateTime-btn col-12 ">
              <p><DateRangeIcon style={{fill:"#7457fb"}}/> 19 July 2023</p>
              <p><AccessTimeOutlinedIcon style={{fill:"#f27d58"}}/> 12:00 PM</p>
          </div>

         
        <div className='row col-12 bottomBtnDiv justify-content-between'  >

       
        <div className="action-btn col-5" onClick={()=>handleClick(props.status)}>{props.status==='upcoming'?"Action":"Activity"} {(props.type!=="therepist"||props.status==="upcoming")&&<KeyboardArrowDownIcon />}
       {action &&<div className='action-div' >
            <h5>Reshedule</h5>
            <hr />
            <h5>Cancel</h5>
        </div>
      }
        </div>
       
          <div className="join-btn col-6">{props.status==='upcoming'?"Join":"Recording"}</div>
          </div>
      </div>
    </div>
    {activity&&
    <div className='row'>
       <ActivityPage who={props.type}/>
    </div>
    }
    </>
  )
}

export default AppointmentCard
