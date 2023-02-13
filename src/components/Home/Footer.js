import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

import { FacebookOutlined, TwitterOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <Box m="0 auto">
                <Container maxWidth="xl">
                    <Grid container spacing={2} px={5} py={7}>
                        <Grid item xs={12} sm={6} md={3} lg={3} display="flex" flexDirection="column" alignItems="start">
                            <Typography sx={{ fontWeight: 'bold', margin: '0 0 10px' }}>ABOUT US</Typography>
                            <Typography style={{ margin: '0 0 7px' }}>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                                blind texts.
                            </Typography>
                            <Box>
                                <Link to="#" style={{ color: 'black' }}>
                                    <FacebookOutlined style={{ fontSize: '25px', color: 'black' }} />
                                </Link>
                                <Link to="#" style={{ color: 'black' }}>
                                    <TwitterOutlined style={{ fontSize: '25px', marginLeft: '10px', color: 'black' }} />
                                </Link>
                                <Link to="#" style={{ color: 'black' }}>
                                    <LinkedinOutlined style={{ fontSize: '25px', marginLeft: '10px', color: 'black' }} />
                                </Link>
                                <Link to="#" style={{ color: 'black' }}>
                                    <InstagramOutlined style={{ fontSize: '25px', marginLeft: '10px', color: 'black' }} />
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={4} display="flex" flexDirection="column" alignItems="center">
                            <Typography sx={{ fontWeight: 'bold', margin: '0 0 10px' }}>SERVICES</Typography>
                            <Link to="#" style={{ color: 'black' }}>
                                <Typography>Cooked</Typography>
                            </Link>
                            <Link to="#" style={{ color: 'black' }}>
                                <Typography>Deliver</Typography>
                            </Link>
                            <Link to="#" style={{ color: 'black' }}>
                                <Typography>Quality Foods</Typography>
                            </Link>
                            <Link to="#" style={{ color: 'black' }}>
                                <Typography>Mixed</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={2} display="flex" flexDirection="column" alignItems="center">
                            <Typography sx={{ fontWeight: 'bold', margin: '0 0 10px' }}>COMPANY</Typography>
                            <Link to="#" style={{ color: 'black' }}>
                                <Typography>Privacy Policy</Typography>
                            </Link>
                            <Link to="#" style={{ color: 'black' }}>
                                <Typography>Terms and conditions</Typography>
                            </Link>
                            <Link to="#" style={{ color: 'black' }}>
                                <Typography>Help Center</Typography>
                            </Link>
                            <Link to="#" style={{ color: 'black' }}>
                                <Typography>Security</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3} display="flex" flexDirection="column" alignItems="center">
                            <Typography sx={{ fontWeight: 'bold', margin: '0 0 10px' }}>HAVE A QUESTIONS?</Typography>
                            <Typography align="center">2 Fake St. Mountain View, San Francisco, California, USA</Typography>
                            <Typography>+2 392 3929 210</Typography>
                            <Typography>+2 392 3929 210</Typography>
                            <Typography>info@tastybites.com</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Footer;
