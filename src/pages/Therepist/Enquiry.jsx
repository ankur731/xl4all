import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import AppointmentCard from '../../components/therepist/AppointmentCard';
import { Grid } from '@mui/material';
import EnquiryCard from '../../components/therepist/EnquiryCard';


export default function Enquiry(props) {
   
   

    
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
        <Container maxWidth="xl" sx={{
                mt: 4,
                mb: 4
            }}>
                    <h5 style={{ fontWeight: "600" }}>Pending Enquiries </h5>
            </Container>
        <Container maxWidth="md" sx={{
                mt: 4,
                mb: 4,
                backgroundColor: "#fff",
                borderRadius: '10px',
                padding: "25px 10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "30px 0"
            }}>
                <EnquiryCard admin={props.pov==="admin"}/>
                <EnquiryCard admin={props.pov==="admin"}/>
                <EnquiryCard admin={props.pov==="admin"}/>
                <EnquiryCard admin={props.pov==="admin"}/>

            </Container>

    </Box>
    );
}
