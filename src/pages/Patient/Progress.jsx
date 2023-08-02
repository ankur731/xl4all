import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import "./Appointment.css"
import ActivityPage from '../../components/ActivityPage';
import { Grid } from '@mui/material';
import Chart from '../../components/patient/Chart';




export default function Progress() {


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


    // const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

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
                padding: ' 0 10px'
            }}
        >
            <Toolbar />
          
            <Container maxWidth="lg" sx={{
                
                mt: 4,
                mb: 4,
            }}>
                    <h4>My Progress</h4>
                    <Grid container mt={4} sx={{
                         backgroundColor: "#fff",
                         borderRadius:"5px",
                         padding:"10px 20px 30px 20px"
                    }}>
                            <ActivityPage who="therepist"/>

                    </Grid>

                    <Grid item lg="6">
                    <Chart data={data} options={options}/>
                    </Grid>
            </Container>





        </Box>
    );
}
