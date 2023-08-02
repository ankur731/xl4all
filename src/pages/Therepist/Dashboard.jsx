import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AppointmentCard from '../../components/therepist/AppointmentCard';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Chart from '../../components/patient/Chart';




function BasicDateCalendar() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
        </LocalizationProvider>
    );
}

//--------------Chart data------------
const data1 = [10,12,8,10,15,9,7,8,9,10];
// const data2 = [1,1,2,2,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,17,17,18,19,20,21,22,23,24,25,26,27,28,29];
const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
const data = {
    labels: labels,
    datasets: [
      {
        label: "No. of Appointment",
        data: data1,
        borderColor: "#00bf63"
      },
    //   {
    //     label: "Actual Progress",
    //     data: data2,
    //     fill: false,
    //     borderColor: "#2242a3"
    //   }
    ],
  }

  const options = {
    scales: {
      x: {
        type: 'category', // Use 'category' scale for X-axis when using labels
        title: {
          display: true,
          text: 'Weeks',
        },
      },
      y: {
        title: {
          display: true,
          text: 'No. of Appointment',
        },
      },
    },
  };

export default function TherepistDashboard() {

    return (
        <Box
        component="main"
        sx={{
            backgroundColor: '#fff',
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            overflowX:"hidden"
        }}
    >
        <Toolbar />
        <Container maxWidth="xxl" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 100,
                            background: '#f4f1fe'
                        }}
                    >
                        <h4 style={{ "textAlign": 'center' }}>Total Session</h4>
                        <h5 style={{ "textAlign": 'center' }}>25</h5>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 100,
                            background: '#e1eefb'
                        }}
                    >
                        <h4 style={{ "textAlign": 'center' }}>Total Patient</h4>
                        <h5 style={{ "textAlign": 'center' }}>25</h5>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 100,
                            background: '#e7fde5'
                        }}
                    >
                        <h4 style={{ "textAlign": 'center' }}>Upcoming Session</h4>
                        <h5 style={{ "textAlign": 'center' }}>5</h5>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 100,
                            background: '#fbedd2'
                        }}
                    >
                        <h4 style={{ "textAlign": 'center' }}>Payment Received</h4>
                        <h5 style={{ "textAlign": 'center' }}>25K</h5>
                    </Paper>
                </Grid>

            </Grid>
        </Container>
        <Container maxWidth="xxl" sx={{ mt: 2 ,
        overflowX:"hidden"}}>
            <h5>Upcoming appointment</h5>
            <Grid container spacing={1} mt={2} sx={{
                 // maxWidth:'920px',
                            // width:"70vw"
                            display:"flex",
                            justifyContent:"center",
                            alignItems: "center"
            }}>
                <Grid item xs={12} sm={12} md={8}>


                    <Grid item sx={{
                        // padding:"10px 0",
                        //  border:"1px solid #f5f5f7",
                        //  borderRadius:"6px"
                    }}>
                        <AppointmentCard status="upcoming" />
                    </Grid>
                    <Grid container sx={{mt:3}}>
                    <h5 style={{ marginTop: "20px" }}>Past appointment</h5>
                    </Grid>
                 
                    <Grid item sx={{ mt: 2, }}>
                        <AppointmentCard status="past"/>
                    </Grid>
                    <Grid item sx={{ mt: 2, 
                         }}>
                        <AppointmentCard status="past"/>
                    </Grid>
                    <Grid item sx={{ mt: 2, 
                         }}>
                        <AppointmentCard status="past"/>
                    </Grid>
                   

                </Grid>
                <Grid item sm={12} md={4} sx={{
                     display: "flex",
                    flexDirection:"column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap:"15px 0"
                }}>
                    {/* <Calendar className="dashboardCalender" onChange={(d) => setDate(d)} /> */}
                   <div style={{border:"3px solid #f5f5f7"}}>
                        <BasicDateCalendar/>
                   </div>
                    <Chart data={data} options={options}/>
                </Grid>

            </Grid>

        </Container>

    </Box>
    );
}
