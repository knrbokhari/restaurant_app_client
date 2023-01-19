import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

const Footer = () => {
    return (
        <>
            <Box m="0 auto">
                <Container maxWidth="xl">
                    <Grid container spacing={2} px={5} py={7}>
                        <Grid item xs={12} sm={6} md={3} lg={3} display="flex" flexDirection="column" alignItems="center">
                            <Typography>ABOUT US</Typography>
                            <Typography>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                                blind texts.
                            </Typography>
                            {/* <Typography>Facebook</Typography>
                        <Typography>GitHub</Typography>
                        <Typography>Gmail</Typography> */}
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={4} display="flex" flexDirection="column" alignItems="center">
                            <Typography>SERVICES</Typography>
                            <Typography>Cooked</Typography>
                            <Typography>Deliver</Typography>
                            <Typography>Quality Foods</Typography>
                            <Typography>Mixed</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={2} display="flex" flexDirection="column" alignItems="center">
                            <Typography>ABOUT US</Typography>
                            <Typography>Privacy policy</Typography>
                            <Typography>Terms and conditions</Typography>
                            <Typography>Help Center</Typography>
                            <Typography>Security</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3} display="flex" flexDirection="column" alignItems="center">
                            <Typography>HAVE A QUESTIONS?</Typography>
                            <Typography>203 Fake St. Mountain View, San Francisco, California, USA</Typography>
                            <Typography>+2 392 3929 210</Typography>
                            <Typography>+2 392 3929 210</Typography>
                            <Typography>info@yourdomain.com</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Footer;
