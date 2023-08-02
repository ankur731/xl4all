import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { useModal, Modal } from 'react-morphing-modal';
import 'react-morphing-modal/dist/ReactMorphingModal.css';
import DateCalendarServerRequest from '../../components/Calender';
// import "./Appointment.css";
import "./Therepists.css"





export default function Therepists(props) {
   

    function gotodoctorprofilepage() {
        if(props.admin) {
            window.location.href = "/admin/therepist/therepist-detail"
        } else {
            window.location.href = "/patient/therepist/therepist-detail"
        }
       
    }
    const { modalProps, getTriggerProps } = useModal({
        background: '#21252994;',
    });

    return (
        <Box
        component="main"
        sx={{
            backgroundColor: '#f5f5f7',
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
        }}
    >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 6, mb: 4 }}>
            <Grid container mb={2}>
                <Grid item xs={12}>
               {props.admin?
                    <h5 style={{ fontWeight: "600" }}>All Therepist</h5>
              
               :<>
                    <h5 style={{ fontWeight: "600" }}>Book Appointment</h5>
                    <p>Book appointments with minimum wait-time & verified therepist</p>
                </>
                }
                </Grid>
            </Grid>
            <Grid container spacing={2}>

                <Grid item xs={12} md={12} lg={12}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 'auto',
                        }}
                    >
                        <div class="card mb-1" style={{ border: "none" }}>
                            <div class="card-body" >
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col col-xl-6 col-lg-5     col-sm-12 col-xs-12 row' style={{ alignItems: "center" }}>
                                            <div className='col col-sm-6 imgDiv' >
                                                <img  src={require("../../images/person.jpg")} alt='person' />
                                                <p onClick={gotodoctorprofilepage}>View Profile</p>
                                            </div>
                                            <div className='col col-sm-6  contentDiv' >
                                                <h5 class="card-title">Dr. Abhishek Shetty</h5>
                                                <p style={{marginBottom:"3px"}}>MBBS,MD</p>
                                                <h6>London, UK (GMT + 05:30) </h6>
                                                <p><WorkOutlineOutlinedIcon /> 10+ year Experience</p>
                                            </div>
                                        </div>
                                        <div className='col col-xl-6 col-lg-6  col-sm-12 col-xs-12' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignSelf: "center", alignItems: "center" }}>
                                            <p>Available Today</p>
                                            <button {...getTriggerProps()} className='bookAppointmentBtn'>Book appointment</button>
                                            <Modal {...modalProps}>

                                                <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
                                                    <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                                                        <Grid item xs={12} md={12} lg={8}>

                                                            <Paper

                                                                sx={{
                                                                    p: 2,
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    height: 'auto',
                                                                }}
                                                            >
                                                                <h5>Select Slot</h5>
                                                                <DateCalendarServerRequest />
                                                                <form>
                                                                    <Grid container maxWidth="md" spacing={2}

                                                                        sx={{
                                                                            display: 'flex',
                                                                            flexDirection: 'row',
                                                                            textAlign: 'center',
                                                                            gap: "20px 15px",
                                                                            justifyContent: "center",
                                                                            alignItems: "center"

                                                                        }}
                                                                    >

                                                                        <Grid item xs={9} sm={5} md={4} lg={5} className='time-button'>
                                                                            <input type="radio" id="a25" name="check-substitution-2" />
                                                                            <label class="btn btn-default" for="a25">02:30-03:30</label>
                                                                        </Grid>

                                                                        <Grid item xs={9} sm={5} md={4} lg={5} className='time-button'>
                                                                            <input type="radio" id="a25" name="check-substitution-2" />
                                                                            <label class="btn btn-default" for="a25">02:30-03:30</label>
                                                                        </Grid>
                                                                        <Grid item xs={9} sm={5} md={4} lg={5} className='time-button'>
                                                                            <input type="radio" id="a25" name="check-substitution-2" />
                                                                            <label class="btn btn-default" for="a25">02:30-03:30</label>
                                                                        </Grid>
                                                                        <Grid item xs={9} sm={5} md={4} lg={5} className='time-button'>
                                                                            <input type="radio" id="a25" name="check-substitution-2" />
                                                                            <label class="btn btn-default" for="a25">02:30-03:30</label>
                                                                        </Grid>







                                                                    </Grid>
                                                                </form>

                                                                <Grid container sx={{
                                                                    display: "flex",
                                                                    justifyContent: "center",
                                                                    alignItems: "center",
                                                                    marginTop: "20px",
                                                                }}>
                                                                    <Grid item>
                                                                        <button style={{ padding: "8px 30px", border: "none", borderRadius: "5px", backgroundColor: '#00bf63', color: "#fff" }}>Confirm</button>
                                                                    </Grid>
                                                                </Grid>
                                                            </Paper>

                                                        </Grid>
                                                    </Grid>

                                                </Container>
                                            </Modal>
                                        </div>
                                    </div>
                                    <hr style={{ marginBottom: "35px" }} />
                                    <div className='row'>
                                        <div className='col col-xl-6 col-lg-7 col-md-9 col-sm-12 col-xs-12 row' style={{ alignItems: "center" }}>
                                            <div className='col col-lg-6 imgDiv' >
                                                <img style={{ borderRadius: "50%" }} src={require("../../images/person.jpg")} alt='person' />
                                                <p  onClick={gotodoctorprofilepage}>View Profile</p>
                                            </div>
                                            <div className='col col-lg-6 contentDiv' >
                                                <h5 class="card-title">Dr. Abhishek Shetty</h5>
                                                <p>MBBS,MD</p>
                                                <h6>London, UK (GMT + 05:30) </h6>
                                                <p><WorkOutlineOutlinedIcon /> 10+ year Experience</p>
                                            </div>
                                        </div>
                                        <div className='col col-xl-6 col-lg-5 col-md-3 col-sm-12 col-xs-12' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignSelf: "center", alignItems: "center" }}>
                                            <p>Available Today</p>
                                            <button {...getTriggerProps()} className='bookAppointmentBtn'>Book appointment</button>
                                            <Modal {...modalProps}>

                                                <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
                                                    <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                                                        <Grid item xs={12} md={12} lg={8}>

                                                            <Paper

                                                                sx={{
                                                                    p: 2,
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    height: 'auto',
                                                                }}
                                                            >
                                                                <h5>Select Slot</h5>
                                                                <DateCalendarServerRequest />
                                                                <form>
                                                                    <Grid container maxWidth="md" spacing={2}

                                                                        sx={{
                                                                            display: 'flex',
                                                                            flexDirection: 'row',
                                                                            textAlign: 'center',
                                                                            gap: "20px 15px",
                                                                            justifyContent: "center",
                                                                            alignItems: "center"

                                                                        }}
                                                                    >

                                                                        <Grid item xs={9} sm={5} md={4} lg={5} className='time-button'>
                                                                            <input type="radio" id="a25" name="check-substitution-2" />
                                                                            <label class="btn btn-default" for="a25">02:30-03:30</label>
                                                                        </Grid>

                                                                        <Grid item xs={9} sm={5} md={4} lg={5} className='time-button'>
                                                                            <input type="radio" id="a25" name="check-substitution-2" />
                                                                            <label class="btn btn-default" for="a25">02:30-03:30</label>
                                                                        </Grid>
                                                                        <Grid item xs={9} sm={5} md={4} lg={5} className='time-button'>
                                                                            <input type="radio" id="a25" name="check-substitution-2" />
                                                                            <label class="btn btn-default" for="a25">02:30-03:30</label>
                                                                        </Grid>
                                                                        <Grid item xs={9} sm={5} md={4} lg={5} className='time-button'>
                                                                            <input type="radio" id="a25" name="check-substitution-2" />
                                                                            <label class="btn btn-default" for="a25">02:30-03:30</label>
                                                                        </Grid>







                                                                    </Grid>
                                                                </form>

                                                                <Grid container sx={{
                                                                    display: "flex",
                                                                    justifyContent: "center",
                                                                    alignItems: "center",
                                                                    marginTop: "20px",
                                                                }}>
                                                                    <Grid item>
                                                                        <button style={{ padding: "8px 30px", border: "none", borderRadius: "5px", backgroundColor: '#00bf63', color: "#fff" }}>Confirm</button>
                                                                    </Grid>
                                                                </Grid>
                                                            </Paper>

                                                        </Grid>
                                                    </Grid>

                                                </Container>
                                            </Modal>
                                        </div>
                                    </div>
                                    <hr style={{ marginBottom: "35px" }} />
                                    <div className='row'>
                                        <div className='col col-xl-6 col-lg-7 col-md-9 col-sm-12 col-xs-12 row' style={{ alignItems: "center" }}>
                                            <div className='col col-lg-6 imgDiv' >
                                                <img style={{ borderRadius: "50%" }} src={require("../../images/person.jpg")} alt='person' />
                                                <p  onClick={gotodoctorprofilepage}>View Profile</p>
                                            </div>
                                            <div className='col col-lg-6 contentDiv' >
                                                <h5 class="card-title">Dr. Abhishek Shetty</h5>
                                                <p>MBBS,MD</p>
                                                <h6>London, UK (GMT + 05:30) </h6>
                                                <p><WorkOutlineOutlinedIcon /> 10+ year Experience</p>
                                            </div>
                                        </div>
                                        <div className='col col-xl-6 col-lg-5 col-md-3 col-sm-12 col-xs-12' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignSelf: "center", alignItems: "center" }}>
                                            <p>Available Today</p>
                                            <button {...getTriggerProps()} className='bookAppointmentBtn'>Book appointment</button>
                                            <Modal {...modalProps}>

                                                <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
                                                    <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                                                        <Grid item xs={12} md={12} lg={8}>

                                                            <Paper

                                                                sx={{
                                                                    p: 2,
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    height: 'auto',
                                                                }}
                                                            >
                                                                <h5>Select Slot</h5>
                                                                <DateCalendarServerRequest />
                                                                <form>
                                                                    <Grid container maxWidth="md" spacing={2}

                                                                        sx={{
                                                                            display: 'flex',
                                                                            flexDirection: 'row',
                                                                            textAlign: 'center',
                                                                            gap: "20px 15px",
                                                                            justifyContent: "center",
                                                                            alignItems: "center"

                                                                        }}
                                                                    >

                                                                        <Grid item xs={9} sm={5} md={4} lg={5} className='time-button'>
                                                                            <input type="radio" id="a25" name="check-substitution-2" />
                                                                            <label class="btn btn-default" for="a25">02:30-03:30</label>
                                                                        </Grid>

                                                                        <Grid item xs={9} sm={5} md={4} lg={5} className='time-button'>
                                                                            <input type="radio" id="a25" name="check-substitution-2" />
                                                                            <label class="btn btn-default" for="a25">02:30-03:30</label>
                                                                        </Grid>
                                                                        <Grid item xs={9} sm={5} md={4} lg={5} className='time-button'>
                                                                            <input type="radio" id="a25" name="check-substitution-2" />
                                                                            <label class="btn btn-default" for="a25">02:30-03:30</label>
                                                                        </Grid>
                                                                        <Grid item xs={9} sm={5} md={4} lg={5} className='time-button'>
                                                                            <input type="radio" id="a25" name="check-substitution-2" />
                                                                            <label class="btn btn-default" for="a25">02:30-03:30</label>
                                                                        </Grid>







                                                                    </Grid>
                                                                </form>

                                                                <Grid container sx={{
                                                                    display: "flex",
                                                                    justifyContent: "center",
                                                                    alignItems: "center",
                                                                    marginTop: "20px",
                                                                }}>
                                                                    <Grid item>
                                                                        <button style={{ padding: "8px 30px", border: "none", borderRadius: "5px", backgroundColor: '#00bf63', color: "#fff" }}>Confirm</button>
                                                                    </Grid>
                                                                </Grid>
                                                            </Paper>

                                                        </Grid>
                                                    </Grid>

                                                </Container>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </Grid>

            </Grid>
           
        </Container>

    </Box>
    );
}
