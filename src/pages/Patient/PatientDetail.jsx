import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import "./PatientDetail.css"
import ActivityPage from '../../components/ActivityPage';
import Chart from '../../components/patient/Chart';



//----------------Chart data-------------
const data1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
const data2 = [1,1,2,2,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,17,17,18,19,20,21,22,23,24,25,26,27,28,29];
const labels = ["1", "6", "11", "16", "21", "26", "31", "36", "41", "46", "51", "56", "61", "66", "71", "76", "81", "86", "91", "96", "101", "106", "111", "116", "121", "126", "131", "136","141","146", "151", "156", "161", "166", "171"]
const data = {
    labels: labels,
    datasets: [
      {
        label: "Expected Progress",
        data: data1,
        borderColor: "#00bf63"
      },
      {
        label: "Actual Progress",
        data: data2,
        fill: false,
        borderColor: "#2242a3"
      }
    ],
  }

  const options = {
    scales: {
      x: {
        type: 'category', // Use 'category' scale for X-axis when using labels
        title: {
          display: true,
          text: 'Days',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Trials',
        },
      },
    },
    maintainAspectRatio: false
  };

export default function Patientdetail(props) {
   
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
                        overflowX:"hidden",
                        padding: ' 0 10px'
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{
                        mt: 4,
                        mb: 4,
                        backgroundColor: "#fff",
                        borderRadius: '10px',
                        padding: "15px "
                    }}>
                        <Grid container spacing={3} sx={{
                            alignItems: "center",
                            padding: "10px"
                        }}>
                            <Grid item xs={5} sm={4} md={3} lg={2}>
                                <img className='patient-detail-img' src={require('../../images/person.jpg')} alt='personImg' />
                            </Grid>
                            <Grid item xs={7} sm={4} md={3} lg={3}>
                                <h6><strong>Abhsihek patil</strong></h6>
                                <p>London, UK ( GMT+05:30 )</p>
                            </Grid>

                        </Grid>
                        <Grid container columnSpacing={{ sm: 4, md: 4 }} maxWidth="lg" sx={{
                            mt: 4,
                            justifyContent: "space-around",
                            padding: "10px"
                        }}>
                            <Grid item sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                gap:"0 40px",
                            }} xs={12} sm={6} md={5}>
                                <h5 >Name of the Parent</h5>
                                <p >Abhishek Upmanyu</p>
                            </Grid>
                            <Grid item sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                gap:"0 40px",

                            }} xs={12} sm={6} md={5}>
                                <h5 >Name of the Student</h5>
                                <p >Sanjeev Upmanyu</p>
                            </Grid>
                            <Grid item sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                gap:"0 40px",

                            }} xs={12} sm={6} md={5}>
                                <h5 >Age of the student</h5>
                                <p >16</p>
                            </Grid>
                            <Grid item sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                gap:"0 40px",

                            }} xs={12} sm={6} md={5}>
                                <h5 >Primary Language Spoken</h5>
                                <p >English</p>
                            </Grid>
                            <Grid item sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                gap:"0 40px",

                            }} xs={12} sm={6} md={5}>
                                <h5 >Country</h5>
                                <p >India</p>
                            </Grid>
                            <Grid item sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                gap:"0 40px",

                            }} xs={12} sm={6} md={5}>
                                <h5 >Timezone</h5>
                                <p >GMT + 05:30</p>
                            </Grid>


                        </Grid>
                        <Grid  sx={{
                            mt: 2
                        }}>
                            <h5>Expectation from Therepy</h5>
                            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                        </Grid>
                        <h5>Activity</h5>
                        <Grid container>
                            <ActivityPage />
                        </Grid>
                            <Grid item sx={{
                                mt:4
                            }}>
                            <h5>Activity Chart</h5>
                            </Grid>
                        <Grid container sx={{
                            mt: 2,
                            display:"flex",
                            justifyContent:"space-between",    
                            alignItems:"center",
                        }}>
                            <Grid item xs={11}  md={6}>
                                 <Chart  data={data} options={options}/>
                            </Grid>
                            <Grid item xs={12}  md={5} >
                           
                            <Grid item xs={12} lg={9}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 100,
                                        background: '#eeecf9'
                                    }}
                                >
                                     <h5 style={{ "textAlign": 'center' }}>Total Session</h5>
                                    <h2 style={{ "textAlign": 'center' }}>25</h2>
                                </Paper>
                            </Grid>
                            <Grid sx={{marginTop:'10px'}} item xs={12} lg={9} >
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 100,
                                        background: '#fdf6e9',
                                    }}
                                >
                                    <h5 style={{ "textAlign": 'center' }}>Upcoming Session</h5>
                                    <h2 style={{ "textAlign": 'center' }}>5</h2>
                                </Paper>
                            </Grid>

                            </Grid>
                        </Grid>

                                    {props.admin&&
                                        <Grid container mt={4} mb={4} sx={{display:"flex", justifyContent:"flex-end"}}>
                            <Grid item>
                                <button style={{padding:"8px 30px", border:"none", borderRadius:"4px", backgroundColor:"#a90909", color:"#fff"}}>Suspend Patient</button>
                            </Grid>
                        </Grid>}

                        {/* <Copyright sx={{ pt: 4 }} /> */}
                    </Container>
                    
                </Box>
    );
}
