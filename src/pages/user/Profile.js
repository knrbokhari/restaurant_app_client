import React from 'react';
import { Container, Box, Grid, Typography, Divider, List, Button, Paper } from '@mui/material';

const Profile = () => {
    return (
        <Container>
            <Typography variant="h1" component="h2" align="center" mt={5} mb={3}>
                Profile
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={5}>
                    <Paper elevation={0} style={{ padding: '25px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <img
                                src="https://www.ateneo.edu/sites/default/files/styles/large/public/2021-11/istockphoto-517998264-612x612.jpeg?itok=aMC1MRHJ"
                                alt="profile_image"
                                width="80%"
                                height="auto"
                                style={{ borderRadius: '50%', marginBottom: '15px' }}
                            />
                            <Box>
                                <Typography variant="h4">name</Typography>
                                <Typography variant="h4">email</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Paper elevation={0} style={{ padding: '25px' }}>
                        <Typography variant="h2" mb={4}>
                            Profile Info
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h4">First Name: first_name</Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h4">Last Name : last_name</Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h4">Email Address : email</Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h4">Role : role</Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h4">Address : address</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h4">Total Order : order.length</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h4">Cart Items : cart.length</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h4">Review : review.length</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant="h4">Edit Profile</Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant="h4">Change Password</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <Typography variant="h2" component="h2" align="center" mt={3}>
                All Review
            </Typography>
            <Typography sx={{ fontSize: 20 }} align="center">
                You don't give any review.
            </Typography>
        </Container>
    );
};

export default Profile;
