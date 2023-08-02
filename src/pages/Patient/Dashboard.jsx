import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
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
  };

export default function PatientDashboard() {
 
   
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
                  
                    <Container maxWidth="xxl" sx={{ mt: 4 }}>
                        <h5>Upcoming appointment</h5>
                        <Grid container spacing={1} mt={2} sx={{
                            // maxWidth:'920px',
                            // width:"70vw"
                            display:"flex",
                            justifyContent:"center",
                            alignItems: "center"
                        }}>
                            <Grid item sm={12} md={11} lg={8} xl={7} xxl={6}>


                                <Grid item>
                                    <AppointmentCard status="upcoming" type="therepist"/>
                                </Grid>
                                <Grid item sx={{ mt: 4 }}>
                                    <h5 style={{ marginBottom: "20px" }}>Past appointment</h5>
                                    <AppointmentCard status="past" type="therepist"/>
                                </Grid>
                                <Grid item sx={{ mt: 4 }}>
                                    <AppointmentCard status="past" type="therepist"/>
                                </Grid>
                                <Grid item sx={{ mt: 4 }}>
                                    <AppointmentCard status="past" type="therepist"/>
                                </Grid>

                            </Grid>
                            <Grid item sm={12} md={12} lg={4} xl={5} xxl={6} sx={{
                                display: "flex",
                                flexDirection:"column",
                                justifyContent: "flex-start",
                                // alignItems: "stre",
                                alignItems:"flex-start",
                                gap:"15px 0",
                                
                            }}>
                                {/* <Calendar className="dashboardCalender" onChange={(d) => setDate(d)} /> */}
                               <div style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                               <div style={{border:"3px solid #f5f5f7"}}>
                                    <BasicDateCalendar/>
                               </div>
                               </div>
                           
                               <Chart data={data} options={options}/>
                            </Grid>
                         

                        </Grid>

                    </Container>

                </Box>
         
    );
}
