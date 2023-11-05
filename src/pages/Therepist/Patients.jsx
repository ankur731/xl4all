import * as React from 'react';
import './Patient.css'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';


export default function Patients(props) {
 
  const navigate = useNavigate();

  const gotopatientdetail = () => {
    // 👇️ navigate to /
    if(props.admin){
      navigate('/admin/patient/patient-detail');
    } else {
      navigate('/therepist/patient/patient-detail');
    }
  };
  

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
    <Container maxWidth="xl" sx={{ 
                  mt:4,
                  mb:4,
              }}>
                  <div>
                      <h5 style={{fontWeight:"600"}}>Patient List</h5>
                  </div>
                  {/* <button className='addAppointmentBtn'>Add <span>an Appointment</span> <AddIcon /></button> */}
    </Container>
    <Container maxWidth="lg" sx={{ 
      mt: 4, 
      mb: 4, 
      backgroundColor:"#fff",
      borderRadius:'10px',
      padding:"15px 0 10px 10px"
     }}>
      <Grid container spacing={2} sx={{justifyContent:'center'}}>


        <Grid container spacing={3} item xs={12} md={5} sx={{
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Grid item xs={5} sm={4} md={6}>
            <img className='patientImg' src={require("../../images/person.jpg")} alt='ptientImg' />
          </Grid>
          <Grid item xs={6} >
            <h5>Abhishek Shetty</h5>
            <h6>London, UK ( GMT + 05:30 )</h6>
            <Button onClick={gotopatientdetail} sx={{backgroundColor:"#1e45ac"}} variant="contained" >View Profile</Button>
          </Grid>
        </Grid>
        <Grid container spacing={3} item xs={12} md={5} sx={{
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Grid item xs={5} sm={4} md={6}>
            <img className='patientImg' src={require("../../images/person.jpg")} alt='ptientImg' />
          </Grid>
          <Grid item xs={6}>
            <h5>Abhishek Shetty</h5>
            <h6>London, UK ( GMT + 05:30 )</h6>
            <Button onClick={gotopatientdetail} sx={{backgroundColor:"#1e45ac"}}  variant="contained">View Profile</Button>
          </Grid>
        </Grid>
      </Grid>
      <hr />
      <Grid container spacing={2} sx={{justifyContent:'center'}}>


        <Grid container spacing={3} item xs={12} md={5} sx={{
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Grid item xs={5} sm={4} md={6}>
            <img className='patientImg' src={require("../../images/person.jpg")} alt='ptientImg' />
          </Grid>
          <Grid item xs={6} >
            <h5>Abhishek Shetty</h5>
            <h6>London, UK ( GMT + 05:30 )</h6>
            <Button onClick={gotopatientdetail}  sx={{backgroundColor:"#1e45ac"}}  variant="contained">View Profile</Button>
          </Grid>
        </Grid>
        <Grid container spacing={3} item xs={12} md={5} sx={{
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Grid item xs={5} sm={4} md={6}>
            <img className='patientImg' src={require("../../images/person.jpg")} alt='ptientImg' />
          </Grid>
          <Grid item xs={6}>
            <h5>Abhishek Shetty</h5>
            <h6>London, UK ( GMT + 05:30 )</h6>
            <Button onClick={gotopatientdetail}  sx={{backgroundColor:"#1e45ac"}}  variant="contained">View Profile</Button>
          </Grid>
        </Grid>
      </Grid>
      <hr />
      <Grid container spacing={2} sx={{justifyContent:'center'}}>


        <Grid container spacing={3} item xs={12} md={5} sx={{
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Grid item xs={5} sm={4} md={6}>
            <img className='patientImg' src={require("../../images/person.jpg")} alt='ptientImg' />
          </Grid>
          <Grid item xs={6} >
            <h5>Abhishek Shetty</h5>
            <h6>London, UK ( GMT + 05:30 )</h6>
            <Button onClick={gotopatientdetail}  sx={{backgroundColor:"#1e45ac"}}  variant="contained">View Profile</Button>
          </Grid>
        </Grid>
        <Grid container spacing={3} item xs={12} md={5} sx={{
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Grid item xs={5} sm={4} md={6}>
            <img className='patientImg' src={require("../../images/person.jpg")} alt='ptientImg' />
          </Grid>
          <Grid item xs={6}>
            <h5>Abhishek Shetty</h5>
            <h6>London, UK ( GMT + 05:30 )</h6>
            <Button onClick={gotopatientdetail}  sx={{backgroundColor:"#1e45ac"}}    variant="contained">View Profile</Button>
          </Grid>
        </Grid>
      </Grid>
      <hr />




    {/* <Copyright sx={{ pt: 4 }} /> */}
  </Container>
  {/* <Grid container spacing={2}>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid> */}
</Box>
  );
}
