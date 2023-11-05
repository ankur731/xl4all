import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useModal, Modal } from 'react-morphing-modal';
import DateCalendarServerRequest from '../../components/Calender';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useState } from 'react';
import "./TherepistDetail.css"
import { FaStar } from "react-icons/fa";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
// import toast
import { ToastContainer, toast } from 'react-toastify';

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};


const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // position:"absolute",
        // backgroundColor:"#f5f5f7",
        // left:"50%",
        // top:"50%"
    },
    div: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid grey",
        borderRadius: "6px",
        padding: "25px 15px"
    },
    stars: {
        display: "flex",
        flexDirection: "row"
    },
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        padding: 10,
        margin: "20px 0",
        minHeight: 100,
        width: 300,
        resize:'none',
        outline:"none"
    },
    button: {
        border: "none",
        backgroundColor: "#00BF63",
        color: "#fff",
        borderRadius: 5,
        width: 300,
        padding: 10
    }
};

export default function Therepistdetail(props) {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [feedbackForm, setFeedbackForm] = useState(false);
    const stars = Array(5).fill(0);

    const navigate  = useNavigate();

    const handleClick = (value) => {
        setCurrentValue(value);
    };

    const handleMouseOver = (newHoverValue) => {
        setHoverValue(newHoverValue);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };

    function feedbackSubmitted() {
        toggleFeebackForm()
        return toast.success('Feedback sent successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

    }
    function toggleFeebackForm() {
        setFeedbackForm(!feedbackForm)
       
        // return  toast.success("Success Notification !");
    }

    const { modalProps, getTriggerProps } = useModal({
        background: '#21252994;',
    });
    // const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
    function goToBack() {
        {props.admin?
            navigate("/admin/therepists"):
            navigate("/patient/therepists")
        }
        
    }
    // window.location.href = "admin/patient/therepists";

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
            <Container sx={{
                mt: 4,
                mb: 4,
                paddingLeft: "0px",
            }}>
                <Grid item sx={{
                    paddingLeft: "0px"
                }}>
                    <p style={{ fontWeight: "bold", cursor:"pointer" }} onClick={goToBack}><KeyboardBackspaceOutlinedIcon /> Back to list</p>
                </Grid>
            </Container>
            <Container maxWidth="lg" sx={{
                mt: 4,
                mb: 4,
                backgroundColor: "#fff",
                borderRadius: '10px',
                padding: "15px 0 10px 0"
            }}>
                <Grid container spacing={3} sx={{
                    alignItems: "center",
                    padding: "10px"
                }}>
                    <Grid item xs={5} sm={5} md={3} lg={3} xl={3}>
                        <img className='patient-detail-img' src={require('../../images/person.jpg')} alt='personImg' />
                    </Grid>
                    <Grid item xs={7} sm={6} md={5} lg={3} xl={3}>
                        <h6><strong>Abhsihek patil</strong></h6>
                        <p>London, UK ( GMT+05:30 )</p>
                        <p style={{ margin: "0" }}>10+ years of Experince</p>
                    </Grid>
                       {!props.admin&&
                    <Grid item xs={12} sm={12} md={4} lg={6} xl={6} className='bookAppointmentBtnSection' style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                     
                       <p style={{ marginBottom: "5px" }}>Available Today</p>
                        <button {...getTriggerProps()} className='bookAppointmentBtn'>Book an appointment</button>
                      
                        <Modal {...modalProps}>

                            <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
                                <Grid  container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                                    <Grid className='appointmentContainer'
                                        item xs={12} md={12} lg={8}>

                                        <Paper 

                                            sx={{
                                                p: 2,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                height: 'auto',
                                                overflowX:"scroll"
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

                <Grid sx={{
                    mt: 3,
                    padding:"15px"
                }}>
                    <h5 style={{ fontWeight: "bold" }}>Bio</h5>
                    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    <Grid  xs={12}  >
                        <p style={{ fontWeight: "bold" }}>Certificate : </p>
                        <Grid container sm={12} style={{ display: "flex",justifyContent:"space-between", gap: "15px 15px" }}>
                            <Grid  item xs={12} sm={8} lg={5} style={{ display: "flex",alignItems:"center", gap: "0 15px" }}>
                            <p style={{marginBottom:"0px"}}>Certificate Name</p>
                            <button className='viewCertificate-btn'>View file</button>
                            </Grid>
                            <Grid  item xs={12} sm={8} lg={5}  style={{ display: "flex",alignItems:"center", gap: "0 15px" }}>
                            <p style={{marginBottom:"0px"}}>Certificate Name</p>
                            <button className='viewCertificate-btn'>View file</button>
                            </Grid>
                        </Grid>
                       
                </Grid>
                    <Grid container mt={3} xs={12} md={8} lg={3} style={{ display: "flex", gap: "0 15px" }}>
                        <p style={{ fontWeight: "bold" }}>Email : </p>
                        <p>therepist@gmail.com</p></Grid>
                </Grid>
                {!props.admin&&
                <Grid sx={{
                    mt: 1,
                    padding:"0 15px"
                }}>
                    <button onClick={toggleFeebackForm} style={{ backgroundColor: "#1e45ac", color: "#fff", borderRadius: "5px", padding: "8px 25px", border: "none" }}>Give Feedback</button>
                    {feedbackForm && <div  style={styles.container}>
                        <div style={styles.div}>
                            <h4> Feedback </h4>
                            <div style={styles.stars}>
                                {stars.map((_, index) => {
                                    return (
                                        <FaStar
                                            key={index}
                                            size={24}
                                            onClick={() => handleClick(index + 1)}
                                            onMouseOver={() => handleMouseOver(index + 1)}
                                            onMouseLeave={handleMouseLeave}
                                            color={
                                                (hoverValue || currentValue) > index
                                                    ? colors.orange
                                                    : colors.grey
                                            }
                                            style={{
                                                marginRight: 10,
                                                cursor: "pointer"
                                            }}
                                        />
                                    );
                                })}
                            </div>
                            <textarea placeholder="What's your experience?" style={styles.textarea} />

                            <button onClick={feedbackSubmitted} style={styles.button}>Submit</button>
                        </div>
                    </div>
                  
                    }

                </Grid>
                }
                <Grid sx={{
                    mt: 4,
                    padding:"0 15px"
                }}>
                    <h5 style={{ fontWeight: "bold" }}>Reviews</h5>
                    <Stack direction="row" spacing={2} mt={3}>
                        <Avatar alt="Remy Sharp" src={require("../../images/person.jpg")} sx={{ width: 56, height: 56 }} />
                        <Grid>
                            <Typography sx={{fontWeight:"bold"}}>
                                Abhishek Upmanyu
                            </Typography>
                            <Typography>
                                Delhi, India
                            </Typography>
                        </Grid>

                    </Stack>
                    {/* <Grid>
                        <Avatar alt="Remy Sharp" src={require("../../images/speech4all.png")} />
                    </Grid> */}
                    <Grid mt={2}>
                    <p style={{marginBottom:"5px"}}>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    <p>26/11/2023</p>
                    </Grid>
                </Grid>


                       {props.admin&&
                        <Grid container mt={4} mb={4} sx={{display:"flex", justifyContent:"flex-end"}}>
                            <Grid item>
                                <button style={{padding:"8px 30px", border:"none", borderRadius:"4px", backgroundColor:"#a90909", color:"#fff"}}>Suspend Therepist</button>
                            </Grid>
                        </Grid>
                        }

                {/* <Copyright sx={{ pt: 4 }} /> */}
            </Container>

        </Box>
    );
}
