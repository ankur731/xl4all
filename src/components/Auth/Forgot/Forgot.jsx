import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Forgot() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    const steps = ['Enter Details', 'Create a Password', 'Finished'];


    const [activeStep, setActiveStep] = React.useState(0);
   
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
        window.location.href= "/signin"
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Forgot Password? Don't Worry  
                    </Typography>

                    <Box sx={{ width: '100%' , mt: 3}}>
                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                                const stepProps = {};
                                const labelProps = {};
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography sx={{ mt: 2, mb: 1 }}>
                                    All steps completed - you&apos;re finished
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={handleReset}>Back to login</Button>
                                </Box>
                            </React.Fragment>
                        ) : (

                            <React.Fragment>
                                <Typography sx={{ mt: 2, mb: 1, display: activeStep === 0 ? 'block' : 'none', }}>

                                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="User Name"
                                            name="username"
                                            autoComplete="off"
                                            autoFocus
                                            type='text'
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="off"
                                        />
                                    </Box>
                                </Typography>


                                <Typography sx={{ mt: 2, mb: 1, display: activeStep === 1 ? 'block' : 'none', }}>
                                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Phone Number"
                                            name="phonenumber"
                                            autoComplete="off"
                                            type='number'
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Enter New Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                        />
                                    </Box>
                                </Typography>
                                <Typography sx={{ mt: 2, mb: 1, display: activeStep === 2 ? 'block' : 'none', }}>
                                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="otp"
                                            label="Enter OTP"
                                            type="number"
                                            id="password"
                                        />
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"

                                            sx={{ mt: 3, mb: 2, }}
                                        >
                                            Change Password
                                        </Button>
                                    </Box>
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                        <Grid container>
                            <Grid item>
                                <Link href="/admin/signin" variant="body2">
                                    {"have an account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>


                </Box>
            </Container>
        </ThemeProvider>
    );
}