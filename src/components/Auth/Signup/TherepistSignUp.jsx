import React from 'react'
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
import { useState } from 'react';


function TherepistSignUp() {
    const [certificate, Certificates] = useState(1);
    const [language, Languages] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const addCertificate = () => {
        Certificates(certificate + 1);
    }
    const addLanguage = () => {
        Languages(language + 1);
    }

    return (
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
                    Let's create your account
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="Name"
                                autoFocus
                            />
                        </Grid>
                        {[...Array(language)].map((l, index) => (
                            <>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="language"
                                        label="Language spoken"
                                        name="language"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                            </>
                        ))}


                        <Grid item xs={12}>
                            <Button onClick={addLanguage}>Add Language</Button>
                        </Grid>


                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                fullWidth
                                name="bio"
                                label="Bio"
                                type="text"
                                id="bio"

                            />
                        </Grid>


                        <Grid item xs={12} sm={6}>
                            <div class="form-floating">
                                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option selected>Select Country*</option>
                                    <option value="1">India</option>
                                    <option value="2">Russia</option>
                                    <option value="3">America</option>
                                </select>
                                <label for="floatingSelect">Find Your Country</label>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="experince"
                                type="number"
                                label="Timezone"
                                name="Years of Experience"
                                autoComplete="family-name"
                            />
                        </Grid>



                        <Grid item xs={12} sm={12}>
                            <Grid item xs={12} sm={6}>
                                <label htmlFor='photo'>Profile Pic </label>
                                <input id='photo' type='file' />

                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="spec"
                                label="Specialization in therepy"
                                name="spec"
                                // autoComplete="email"
                            />

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="experince"
                                type="number"
                                label="Years of Experience"
                                name="Years of Experience"
                                autoComplete="family-name"
                            />
                        </Grid>


                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="Mobile Number"
                                required
                                type="number"
                                fullWidth
                                id="mobile"
                                label="Mobile Number"
                            />
                        </Grid>



                        {[...Array(certificate)].map((c, index) => (
                            <>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="certificate"
                                        label="Certificate Name"
                                        name="certificate"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <label htmlFor='certificatefile'>Certificate </label>
                                    <input id='certificatefile' type='file' />

                                </Grid>
                            </>
                        ))}
                        <Grid item xs={12}>
                            <Button onClick={addCertificate}>Add Certificate</Button>
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/signin" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default TherepistSignUp
