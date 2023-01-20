import React from 'react';
import { Box, Container, Typography, TextField } from '@mui/material';
import { CustomButtonOne } from './Home/HomeCarousel';

const ContactUs = () => {
    return (
        <>
            <Box px={10}>
                <Container maxWidth="xl">
                    <Grid container spacing={2} zIndex={10} px={5} pb={7}>
                        <Grid item xs={12} sm={6} md={5} display="flex" flexDirection="column" alignItems="center">
                            <Typography>Contact Information</Typography>
                            <Typography>Address: 198 West 21th Street, Suite 721 New York NY 10016</Typography>
                            <Typography>Phone: + 1235 2355 98</Typography>
                            <Typography>Email: info@gmail.com</Typography>
                            <Typography>Website: website.com</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={7} display="flex" flexDirection="column" alignItems="center">
                            <Grid container spacing={2} zIndex={10} px={5} pb={7}>
                                <Grid item xs={12} sm={6}>
                                    <TextField id="standard-basic" label="Your Name" variant="standard" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField id="standard-basic" label="Your Email" variant="standard" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField id="standard-basic" label="Subject" variant="standard" />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomButtonOne>Send Message</CustomButtonOne>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default ContactUs;
