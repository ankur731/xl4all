import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const events = [
  {
      id: 0,
      title: 'All Day Event very long title',
      allDay: true,
      start: new Date(2023, 11, 0),
      end: new Date(2023, 11, 1),
  },
  {
      id: 1,
      title: 'Long Event',
      start: new Date(2023, 11, 7),
      end: new Date(2023, 11, 10),
  },

  {
      id: 2,
      title: 'DTS STARTS',
      start: new Date(2023, 11, 13, 0, 0, 0),
      end: new Date(2023, 11, 20, 0, 0, 0),
  },

  {
      id: 3,
      title: 'DTS ENDS',
      start: new Date(2023, 11, 6, 0, 0, 0),
      end: new Date(2023, 11, 13, 0, 0, 0),
  },

  {
      id: 4,
      title: 'Some Event',
      start: new Date(2023, 12, 9, 0, 0, 0),
      end: new Date(2023, 12, 10, 0, 0, 0),
  },
  {
      id: 5,
      title: 'Conference',
      start: new Date(2023, 12, 11),
      end: new Date(2023, 12, 13),
      desc: 'Big conference for important people',
  },
  {
      id: 6,
      title: 'Meeting',
      start: new Date(2023, 11, 11, 10, 30, 0, 0),
      end: new Date(2023, 11, 11, 12, 30, 0, 0),
      desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
      id: 7,
      title: 'Lunch',
      start: new Date(2023, 11, 11, 12, 0, 0, 0),
      end: new Date(2023, 11, 11, 13, 0, 0, 0),
      desc: 'Power lunch',
  },
  {
      id: 8,
      title: 'Meeting',
      start: new Date(2023, 11, 11, 14, 0, 0, 0),
      end: new Date(2023, 11, 11, 15, 0, 0, 0),
  },
  {
      id: 9,
      title: 'Happy Hour',
      start: new Date(2023, 3, 11, 17, 0, 0, 0),
      end: new Date(2023, 3, 11, 17, 30, 0, 0),
      desc: 'Most important meal of the day',
  },
  {
      id: 10,
      title: 'Dinner',
      start: new Date(2023, 3, 12, 20, 0, 0, 0),
      end: new Date(2023, 3, 12, 21, 0, 0, 0),
  },
  {
      id: 11,
      title: 'Birthday Party',
      start: new Date(2023, 3, 13, 7, 0, 0),
      end: new Date(2023, 3, 13, 10, 30, 0),
  },
  {
      id: 12,
      title: 'Late Night Event',
      start: new Date(2023, 3, 17, 19, 30, 0),
      end: new Date(2023, 3, 18, 2, 0, 0),
  },
  {
      id: 12.5,
      title: 'Late Same Night Event',
      start: new Date(2023, 3, 17, 19, 30, 0),
      end: new Date(2023, 3, 17, 23, 30, 0),
  },
  {
      id: 13,
      title: 'Multi-day Event',
      start: new Date(2023, 3, 20, 19, 30, 0),
      end: new Date(2023, 3, 22, 2, 0, 0),
  },
  {
      id: 14,
      title: 'Today',
      start: new Date(new Date().setHours(new Date().getHours() - 3)),
      end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
]

const localizer = momentLocalizer(moment)

export default function PatientCalender() {
 
  

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
      padding:"15px 0 10px 0"
     }}>
      
      <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
      
   
  </Container>
 
</Box>
  );
}
