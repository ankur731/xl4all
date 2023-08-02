import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Sideitems = () => {
   
    function gotohome(){
        // console.log(window.loaction.pathname)
        window.location.href="/therepist"
    }
    function gotoappointment(){
        window.location.href="/therepist/appointment"
    }
    function gotopatient(){
        window.location.href="/therepist/patients"
    }
    function gotocalender(){
        window.location.href="/therepist/calender"
    }
    function gotoenquiry(){
        window.location.href="/therepist/enquiry"
    }

    function patientsdashboard(){
        window.location.href="/patient"
    }
    function patientsappointment(){
        window.location.href="/patient/therepists"
    }
    function patientscalender(){
        window.location.href="/patient/calender"
    }
    function patientsprogress(){
        window.location.href="/patient/progress"
    }
    function adminDashboard(){
        window.location.href="/admin"
    }
    function adminTherepists(){
        window.location.href="/admin/therepists"
    }
    function adminPatients(){
        window.location.href="/admin/patients"
    }
    function adminEnquiry(){
        window.location.href="/admin/enquiry"
    }
 
    return (
        <>
            {/* <ListItemButton onClick={gotohome}>
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
            <ListItemButton >
               
               <ListItemText primary="Patient PoV" />
           </ListItemButton> */}
          
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


            {/* <ListItemButton >
               
               <ListItemText primary="Admin PoV" />
           </ListItemButton>
          
           <ListItemButton onClick={adminDashboard}>
               <ListItemIcon>
                  <CalendarTodayIcon sx={{ color: '#fff' }}/>
               </ListItemIcon>
               <ListItemText primary="Dashboard" />
           </ListItemButton>
           <ListItemButton onClick={adminTherepists}>
               <ListItemIcon>
                  <CalendarTodayIcon sx={{ color: '#fff' }}/>
               </ListItemIcon>
               <ListItemText primary="Therepist" />
           </ListItemButton>
           <ListItemButton onClick={adminPatients}>
               <ListItemIcon>
                  <CalendarTodayIcon sx={{ color: '#fff' }}/>
               </ListItemIcon>
               <ListItemText primary="Patient" />
           </ListItemButton>
           <ListItemButton onClick={adminEnquiry}>
               <ListItemIcon>
                  <CalendarTodayIcon sx={{ color: '#fff' }}/>
               </ListItemIcon>
               <ListItemText primary="Enquiries" />
           </ListItemButton> */}
        </>
    );
};

export default Sideitems;