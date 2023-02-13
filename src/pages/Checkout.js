import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import Footer from 'components/Home/Footer';
import CheckoutSummary from 'components/Checkout/CheckoutSummary';

const Checkout = () => {
    return (
        <>
            <Container>
                <Typography mt={5} mb={5} align="center">
                    You're almost there..!
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}></Grid>
                    <Grid item xs={12} sm={6}>
                        <CheckoutSummary />
                    </Grid>
                </Grid>
                <Footer />
            </Container>
        </>
    );
};

export default Checkout;
