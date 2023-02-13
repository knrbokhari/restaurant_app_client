import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import Footer from 'components/Home/Footer';
import CheckoutSummary from 'components/Checkout/CheckoutSummary';
import CheckoutInfo from 'components/Checkout/CheckoutInfo';

const Checkout = () => {
    return (
        <>
            <Container>
                <Typography mt={5} mb={5} fontSize={30} align="center">
                    You're almost there..!
                </Typography>
                <Typography mb={2} fontSize={20} align="center">
                    Complete Your purchase by providing your payment details.
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <CheckoutInfo />
                    </Grid>
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
