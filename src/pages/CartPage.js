import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import CartItems from 'components/Cart/CartItems';
import CartSummary from 'components/Cart/CartSummary';
import Footer from 'components/Home/Footer';
import { useSelector } from 'react-redux';

const CartPage = () => {
    const user = useSelector((state) => state.user);

    return (
        <Container>
            <Typography mt={5} mb={5} align="center">
                You Cart(3 Items)
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <CartItems />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CartSummary />
                </Grid>
            </Grid>
            <Footer />
        </Container>
    );
};

export default CartPage;
