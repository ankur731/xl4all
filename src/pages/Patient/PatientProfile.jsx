import * as React from 'react';
// import './Patient.css'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import './PatientProfile.css'
import { ToastContainer, toast } from 'react-toastify';



export default function PatientProfile() {

 
    function submitProfile() {
        // return toast.success()
        return toast.success('Profile Updated Successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

      }

  return (
    <Box
    component="main"
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[900],
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      padding:' 0 10px'
    }}
  >
    <Toolbar />
    <Container maxWidth="lg" sx={{ 
      mt: 4, 
      mb: 4, 
      backgroundColor:"#fff",
      borderRadius:'10px',
      padding:"0px 0 10px 0"
     }}>
    
      
    <div className="container rounded bg-white  mb-2">
    <div className="row">
        <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">John</span><span class="text-black-50">john@mail.com</span><span> </span></div>
        </div>
        <div className="col-md-7 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label clasNames="labels">Student Name</label><input type="text" className="form-control" placeholder="e.g. John" value=""/></div>
                    <div className="col-md-6"><label className="labels">Parent Name</label><input type="text" className="form-control" value="" placeholder="e.g. Mitchell"/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Age</label><input type="text" className="form-control" placeholder="06" value=""/></div>
                    <div className="col-md-12"><label className="labels">Language Spoken</label><input type="text" className="form-control" placeholder="English" value=""/></div>
                    <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="9988XXXXXX" value=""/></div>
                    <div className="col-md-12"><label className="labels">Country</label><input type="text" className="form-control" placeholder="India" value=""/></div>
                    <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="john@gmail.com" value=""/></div>
                    <div className="col-md-12"><label className="labels">Profile Picture</label><input type="file" className="form-control"  value=""/></div>
                </div>
                <div class="row mt-3">
                    <div className="col-md-6"><label className="labels">Password</label><input type="text" class="form-control" placeholder="********" value=""/></div>
                    <div className="col-md-6"><label className="labels">Confirm Password</label><input type="text" class="form-control" value="" placeholder="********"/></div>
                </div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" onClick={submitProfile} type="button">Save Profile</button></div>
            </div>
        </div>
        {/* <div className="col-md-4">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div><br/>
                <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value=""/></div> <br/>
                <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value=""/></div>
            </div>
        </div> */}
    </div>
</div>




  </Container>
  
</Box>
  );
}
