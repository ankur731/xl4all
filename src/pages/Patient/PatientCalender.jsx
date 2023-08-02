import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';


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
      
    
      
   
  </Container>
 
</Box>
  );
}
