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
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
const dataset1 = [10, 12, 8, 10, 15, 9, 7, 8, 9, 10, 34, 45];
const data1 = {
    labels: labels,
    datasets: [
        {
            label: "New Therepist Added",
            data: dataset1,
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

const dataset2 = [130, 120, 80, 100, 150, 90, 70, 80, 90, 100, 124, 360];
const data2 = {
    labels: labels,
    datasets: [
        {
            label: "New Patient Added",
            data: dataset2,
            borderColor: "#F27D58"
        },
        //   {
        //     label: "Actual Progress",
        //     data: data2,
        //     fill: false,
        //     borderColor: "#2242a3"
        //   }
    ],
}

const dataset3 = [654, 129, 554, 895, 158, 562, 170, 180, 190, 109, 340, 420];
const data3 = {
    labels: labels,
    datasets: [
        {
            label: "No. of appointment ",
            data: dataset3,
            borderColor: "#1e45ac"
        },
        //   {
        //     label: "Actual Progress",
        //     data: data2,
        //     fill: false,
        //     borderColor: "#2242a3"
        //   }
    ],
}

const options1 = {
    scales: {
        x: {
            type: 'category', // Use 'category' scale for X-axis when using labels
            title: {
                display: true,
                text: 'Months',
            },
        },
        y: {
            title: {
                display: true,
                text: 'New Therepist added',
            },
        },
    },
};

const options2 = {
    scales: {
        x: {
            type: 'category', // Use 'category' scale for X-axis when using labels
            title: {
                display: true,
                text: 'Months',
            },
        },
        y: {
            title: {
                display: true,
                text: 'New Patient Added',
            },
        },
    },
};

const options3 = {
    scales: {
        x: {
            type: 'category', // Use 'category' scale for X-axis when using labels
            title: {
                display: true,
                text: 'Months',
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

export default function AdminDashboard() {

    return (
        <Box
            component="main"
            sx={{
                backgroundColor: '#fff',
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Toolbar />
            <Container maxWidth="xxl" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 100,
                                background: '#f4f1fe'
                            }}
                        >
                            <h4 style={{ "textAlign": 'center' }}>Total Patient</h4>
                            <h5 style={{ "textAlign": 'center' }}>255</h5>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 100,
                                background: '#e1eefb'
                            }}
                        >
                            <h4 style={{ "textAlign": 'center' }}>Total Therepist</h4>
                            <h5 style={{ "textAlign": 'center' }}>86</h5>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={3}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 100,
                                background: '#e7fde5'
                            }}
                        >
                            <h4 style={{ "textAlign": 'center' }}>Total Session</h4>
                            <h5 style={{ "textAlign": 'center' }}>512</h5>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={3}>
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
                            <h5 style={{ "textAlign": 'center' }}>25254</h5>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>

            <Container maxWidth="xxl" sx={{ mt: 4, mb: 4 }} >
                <Grid container spacing={2} >
                      <Grid item xs={12} sm={11} md={6} >
                      <Chart  data={data1} options={options1}/>
                      </Grid>
                      <Grid item xs={12} sm={11} md={6}>
                      <Chart data={data2} options={options2}/>
                      </Grid>
                      <Grid item xs={12} sm={11} md={6}>
                      <Chart data={data3} options={options3}/>
                      </Grid>
                </Grid>
            </Container>


        </Box>
    );
}
