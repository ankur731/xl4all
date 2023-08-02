import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Calendar from 'moedim';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { TimePicker } from 'antd';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export function BasicDateCalendar() {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
    );
  }

const myStyle = {
    closeIcon:{
        cursor:"pointer"
    }
}
export default function TherepistCalender() {
   
    const [date, setDate] = useState(new Date());
    const [slotCards, setSlotCard] = useState([]);
    const [slotDate, setSlotDate] = useState("");
    const [slotTime, setSlotTime] = useState("0");
    const calenderChange = (d) => {
        setSlotDate(d.toString().slice(3,10));
        setDate(d);
    }

    const [time, setTime]=  useState([]);
    
    const timeChange = (time, timeString) => {
        // console.log(time)
        // console.log(timeString);
        setTime(time)
        setSlotTime(timeString[0]+" - "+timeString[1]);
    };
    
    const AddSlot = event=>{
         setSlotCard(slotCards.concat(AddSlotCard(slotDate, slotTime)));
    }
    const removeCard = ()=>{
        console.log('clicked')
        slotCards.slice(0,-1);
        const newSlotCards = slotCards
        setSlotCard(newSlotCards);
    }
    
    const AddSlotCard = (date, time)=>{
        return <Grid item  >
        <Paper   onClick={removeCard}
        sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 80,
            background: '#ececec',
            position:'relative',
            minWidth:'180px',
            margin:"10px"
        }}
    >
        <h6>{date}</h6>
        <h6>{time}</h6>
        <CloseOutlinedIcon className='closeIcon' style={myStyle.closeIcon} fontSize='small' sx={{
            position:'absolute',
            right:"10px",
            top:"10px"
        }}/>
    </Paper>
    </Grid>
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
            padding: ' 0 10px'
        }}
    >
        <Toolbar />
        <Container maxWidth="lg" sx={{
            mt: 4,
            mb: 4,
            backgroundColor: "#fff",
            borderRadius: '10px',
            padding: "15px 0 10px 0",

        }}>
                    <h5>Add your slot timing</h5>
            <Grid container spacing={2}  sx={{ justifyContent: 'center', padding: 2 }}>
                <Grid item sm={0} md={1}>
                
                </Grid>
                <Grid item xs={12} sm={10} md={5}>
                    <Calendar value={date} onChange={(d) => calenderChange(d)} />
                    {/* <BasicDateCalendar value={date} onChange={(d) => calenderChange(d)} /> */}
                </Grid>
                <Grid item xs={12} sm={10} md={6} >
                  
                       <Grid item>
                       {/* <TimeRange
                            onStartTimeChange={returnFunctionStart}
                            onEndTimeChange={returnFunctionEnd}
                            startMoment={startTime}
                            endMoment={endTime}
                            minuteIncrement={15}
                            sameIsValid={false}
                        /> */}
                        <TimePicker.RangePicker sx={{
                            width:"100%"
                        }}
                            
                            showSecond={false}
                            minuteStep={10}
                            // onSelect={updateSlot}
                            onChange={timeChange}
                            
                        />
                   
                       </Grid>  
                         <Button style={{width:"260px", marginTop:'15px', backgroundColor:"#1d3e96"}} onClick={AddSlot} variant="contained">Add</Button>
                  
                       <Grid container   mt={2}  xs={12} md={8} lg={12}>
                        
                       
                   
                    {slotCards}
                    
                    
            
                       </Grid>
                </Grid>
                
                <Grid item sm={0} md={2}>
                </Grid>
            </Grid>





            {/* <Copyright sx={{ pt: 4 }} /> */}
        </Container>

    </Box>
    );
}
