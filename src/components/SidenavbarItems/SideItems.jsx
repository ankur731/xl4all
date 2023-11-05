import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
const Sideitems = (props) => {

    const navigate = useNavigate();
   
    function gototherepist(){
        navigate("/therepist")
    }
    function gotoappointment(){
        navigate("/therepist/appointment")
    }
    function gotopatient(){
        navigate("/therepist/patients")

    }
    function gotocalender(){
        navigate("/therepist/calender")

    }
    function gotoenquiry(){
        navigate("/therepist/enquiry")

    }

    function patientsdashboard(){
        navigate("/patient")

    }
    function patientsappointment(){
        navigate("/patient/therepists")

    }
    function patientscalender(){
        navigate("/patient/calender")

    }
    function patientsprogress(){
        navigate("/patient/progress")

    }
    function adminDashboard(){
        navigate("/admin")

    }
    function adminTherepists(){
        navigate("/admin/therepists")
    }
    function adminPatients(){
        navigate("/admin/patients")

    }
    function adminEnquiry(){
        navigate("/admin/enquiry")

    }
 
    return (
        <React.Fragment>
       
           {props.pov==="therepist"&& <>
           <ListItemButton onClick={gototherepist}>
                <ListItemIcon>
                    <HomeOutlinedIcon sx={{ color: '#fff' }}/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
           
            <ListItemButton onClick={gotoappointment}>
                <ListItemIcon>
                   <DateRangeOutlinedIcon sx={{ color: '#fff' }}/>
                </ListItemIcon>
                <ListItemText primary="Appointment" />
            </ListItemButton>
            <ListItemButton onClick={gotopatient}>
                <ListItemIcon>
                   <PersonOutlinedIcon sx={{ color: '#fff' }}/>
                </ListItemIcon>
                <ListItemText primary="Patient" />
            </ListItemButton>
            <ListItemButton onClick={gotocalender}>
                <ListItemIcon>
                   <CalendarTodayIcon sx={{ color: '#fff' }}/>
                </ListItemIcon>
                <ListItemText primary="Calender" />
            </ListItemButton>
            <ListItemButton onClick={gotoenquiry}>
                <ListItemIcon>
                   <CalendarTodayIcon sx={{ color: '#fff' }}/>
                </ListItemIcon>
                <ListItemText primary="Enquiry" />
            </ListItemButton>
   
            </>
            } 
            {props.pov==="patient"&& <>
           <ListItemButton onClick={patientsdashboard}>
               <ListItemIcon>
               <HomeOutlinedIcon sx={{ color: '#fff' }}/>
               </ListItemIcon>
               <ListItemText primary="Dashboard" />
           </ListItemButton>
    
           <ListItemButton onClick={patientsappointment}>
               <ListItemIcon>
               <PersonOutlinedIcon sx={{ color: '#fff' }}/>
               </ListItemIcon>
               <ListItemText primary="Therepist" />
           </ListItemButton>
           <ListItemButton onClick={patientscalender}>
               <ListItemIcon>
                  <CalendarTodayIcon sx={{ color: '#fff' }}/>
               </ListItemIcon>
               <ListItemText primary="Calender" />
           </ListItemButton>
           <ListItemButton onClick={patientsprogress}>
               <ListItemIcon>
                  <CalendarTodayIcon sx={{ color: '#fff' }}/>
               </ListItemIcon>
               <ListItemText primary="My Progress" />
           </ListItemButton>
   
           </>
            } 
            {props.pov==="admin"&& <>
          
           <ListItemButton onClick={adminDashboard}>
           <ListItemIcon>
                    <HomeOutlinedIcon sx={{ color: '#fff' }}/>
                </ListItemIcon>
               <ListItemText primary="Dashboard" />
           </ListItemButton>
           <ListItemButton onClick={adminTherepists}>
           <ListItemIcon>
               <PersonOutlinedIcon sx={{ color: '#fff' }}/>
               </ListItemIcon>
               <ListItemText primary="Therepist" />
           </ListItemButton>
           <ListItemButton onClick={adminPatients}>
           <ListItemIcon>
               <PersonOutlinedIcon sx={{ color: '#fff' }}/>
               </ListItemIcon>
               <ListItemText primary="Patient" />
           </ListItemButton>
           <ListItemButton onClick={adminEnquiry}>
               <ListItemIcon>
                  <CalendarTodayIcon sx={{ color: '#fff' }}/>
               </ListItemIcon>
               <ListItemText primary="Enquiries" />
           </ListItemButton> 
           </>
            } 
    </React.Fragment>
    );
};

export default Sideitems;