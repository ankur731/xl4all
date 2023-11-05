import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import "./Appointment.css"
import AddIcon from '@mui/icons-material/Add';
import AppointmentCard from '../../components/therepist/AppointmentCard';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import TextField from '@mui/material/TextField';
import { useModal, Modal } from 'react-morphing-modal';
import 'react-morphing-modal/dist/ReactMorphingModal.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    border: '2px solid #f5f5f7',
    boxShadow: 24,
    p: 4,
};



export default function TherepistAppointment() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { modalProps, getTriggerProps } = useModal({
        background: '#21252994;',
    });

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
            <Container maxWidth="xl" sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                mt: 4,
                mb: 4
            }}>
                <div>
                    <h5 style={{ fontWeight: "600" }}>Upcoming appointment </h5>
                    <p>Your upcoming appointment</p>
                </div>
                <button {...getTriggerProps()} className='bookAppointmentBtn'>Add <span>an Appointment</span> <AddIcon /></button>

                <Modal {...modalProps}>
                    i am A MODAL
                </Modal>
            </Container>
            <Container maxWidth="md" sx={{
                mt: 4,
                mb: 4,
                backgroundColor: "#fff",
                borderRadius: '10px',
                padding: "25px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "30px 0"
            }}>

                <AppointmentCard status="upcoming" type="patient" />
                <AppointmentCard status="upcoming" type="patient" />
                <AppointmentCard status="upcoming" type="patient" />



            </Container>
            <Container maxWidth="xl" sx={{
                mt: 4,
                mb: 4
            }}>
                <div>
                    <h5 style={{ fontWeight: "600" }}>Past appointment </h5>
                    <p>Your past appointment</p>
                </div>
                {/* <button className='addAppointmentBtn'>Add <span>an Appointment</span> <AddIcon /></button> */}
            </Container>
            <Container maxWidth="md" sx={{
                mt: 4,
                mb: 4,
                backgroundColor: "#fff",
                borderRadius: '10px',
                // padding: "25px 10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "30px 0"
            }} style={{padding:"25px 10px"}}>

                <AppointmentCard status="past" type="therepist" appointmentPage="true"/>
                <AppointmentCard status="past" type="therepist" appointmentPage="true"/>
                <AppointmentCard status="past" type="therepist" appointmentPage="true"/>
            </Container>

        </Box>
    );
}
