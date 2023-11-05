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
import { Navigate, useNavigate } from 'react-router-dom';
// import "./Appointment.css";
import "./Therepists.css"
import "./PatientDetail.css"





export default function Therepists(props) {

    const navigate = useNavigate();


    function gotodoctorprofilepage() {
        if (props.admin) {
            navigate("/admin/therepist/therepist-detail")
            // window.location.href = "/admin/therepist/therepist-detail"
        } else {
            navigate("/patient/therepist/therepist-detail")
            // window.location.href = "/patient/therepist/therepist-detail"
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
                        {props.admin ?
                            <h5 style={{ fontWeight: "600" }}>All Therepist</h5>

                            : <>
                                <h5 style={{ fontWeight: "600" }}>Book Appointment</h5>
                                <p>Book appointments with minimum wait-time & verified therepist</p>
                            </>
                        }
                    </Grid>
                </Grid>
                {/* <Grid container spacing={2}> */}

                {/* <Grid item xs={12} md={12} lg={12}>
                <Paper
sx={{
    p: 1,
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
}}
>
<div class="card mb-1" style={{ border: "none" }}>
    <div class="card-body" >
        <div className='container'>
            <div className='row'>
                <div className='col col-xs-12 col-sm-12 col-md-8 col-lg-7  col-xl-6  row' style={{ alignItems: "center" }}>
                    <div className='col  imgDiv' >
                        <img className='therepistImg'  src={require("../../images/person.jpg")} alt='person' />
                        <p onClick={gotodoctorprofilepage}>View Profile</p>
                    </div>
                    <div className='col  contentDiv' >
                        <h5 class="card-title">Dr. Abhishek Shetty</h5>
                        <p style={{marginBottom:"3px"}}>MBBS,MD</p>
                        <h6>London, UK (GMT + 05:30) </h6>
                        <p><WorkOutlineOutlinedIcon /> 10+ year Experience</p>
                    </div>
                </div>
                <div className='col col-xs-12 col-sm-12 col-md-4  col-lg-5  col-xl-6 ' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignSelf: "center", alignItems: "center" }}>
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
                </Grid> */}
                <Paper
                    sx={{
                        p: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 'auto',
                    }}
                >

                    <Grid container spacing={1} sx={{
                        padding: "10px",
                    }}>
                        <Grid item xs={5} sm={5} md={3} lg={3} xl={2}>
                            <img className='patient-detail-img' src={require('../../images/person.jpg')} alt='personImg' />
                        </Grid>
                        <Grid item xs={7} sm={6} md={5} lg={3} xl={3}
                            sx={{

                                "margin-top": "20px"
                            }}
                        >
                            <h6 onClick={gotodoctorprofilepage} style={{ "cursor": 'pointer' }}><strong>Abhsihek patil</strong></h6>
                            <p>London, UK ( GMT+05:30 )</p>
                            <p style={{ margin: "0" }}>10+ years of Experince</p>
                        </Grid>
                        {!props.admin &&
                            <Grid item xs={12} sm={12} md={4} lg={6} xl={6} className='bookAppointmentBtnSection' style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", }}>

                                <p style={{ marginBottom: "5px" }}>Available Today</p>
                                <button {...getTriggerProps()} className='bookAppointmentBtn'>Book an appointment</button>

                                <Modal {...modalProps}>

                                    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
                                        <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                                            <Grid className='appointmentContainer'
                                                item xs={12} md={12} lg={8}>

                                                <Paper

                                                    sx={{
                                                        p: 2,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        height: 'auto',
                                                        overflowX: "scroll"
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
                            </Grid>
                        }
                    </Grid>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <hr style={{ width: "90%" }} />
                    </div>
                    <Grid container spacing={1} sx={{
                        padding: "10px",
                    }}>
                        <Grid item xs={5} sm={5} md={3} lg={3} xl={2}>
                            <img className='patient-detail-img' src={require('../../images/person.jpg')} alt='personImg' />
                        </Grid>
                        <Grid item xs={7} sm={6} md={5} lg={3} xl={3}

                            sx={{

                                "margin-top": "20px"
                            }}
                        >
                            <h6 onClick={gotodoctorprofilepage} style={{ "cursor": 'pointer' }}><strong>Abhsihek patil</strong></h6>
                            <p>London, UK ( GMT+05:30 )</p>
                            <p style={{ margin: "0" }}>10+ years of Experince</p>
                        </Grid>
                        {!props.admin &&
                            <Grid item xs={12} sm={12} md={4} lg={6} xl={6} className='bookAppointmentBtnSection' style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", }}>

                                <p style={{ marginBottom: "5px" }}>Available Today</p>
                                <button {...getTriggerProps()} className='bookAppointmentBtn'>Book an appointment</button>

                                <Modal {...modalProps}>

                                    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
                                        <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                                            <Grid className='appointmentContainer'
                                                item xs={12} md={12} lg={8}>

                                                <Paper

                                                    sx={{
                                                        p: 2,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        height: 'auto',
                                                        overflowX: "scroll"
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
                            </Grid>
                        }
                    </Grid>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <hr style={{ width: "90%" }} />
                    </div>
                    <Grid container spacing={1} sx={{
                        padding: "10px",

                    }}>
                        <Grid item xs={5} sm={5} md={3} lg={3} xl={2}>
                            <img className='patient-detail-img' src={require('../../images/person.jpg')} alt='personImg' />
                        </Grid>
                        <Grid item xs={7} sm={6} md={5} lg={3} xl={3}
                            sx={{

                                "margin-top": "20px"
                            }}
                        >
                            <h6 onClick={gotodoctorprofilepage} style={{ "cursor": 'pointer' }}><strong>Abhsihek patil</strong></h6>
                            <p>London,UK( GMT+05:30 )</p>
                            <p style={{ margin: "0" }}>10+ years of Experince</p>
                        </Grid>
                        {!props.admin &&
                            <Grid item xs={12} sm={12} md={4} lg={6} xl={6} className='bookAppointmentBtnSection' 
                            style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", }}>

                                <p style={{ marginBottom: "5px" }}>Available Today</p>
                                <button {...getTriggerProps()} className='bookAppointmentBtn'>Book an appointment</button>

                                <Modal {...modalProps}>

                                    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
                                        <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                                            <Grid className='appointmentContainer'
                                                item xs={12} md={12} lg={8}>

                                                <Paper

                                                    sx={{
                                                        p: 2,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        height: 'auto',
                                                        overflowX: "scroll"
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
                            </Grid>
                        }
                    </Grid>
                </Paper>

                {/* </Grid> */}

            </Container>

        </Box>
    );
}
