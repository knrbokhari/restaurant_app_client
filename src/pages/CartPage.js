import React from 'react';
import { Box, Grid, Typography, Divider, Button, Container, IconButton } from '@mui/material';

import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import CartItems from 'components/Cart/CartItems';

const CartPage = () => {
    return (
        <Container>
            <Typography mt={5} mb={5} align="center">
                You Cart(3 Items)
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <CartItems />
                    <CartItems />
                    <CartItems />
                    <CartItems />
                </Grid>
                <Grid item xs={12} sm={6}></Grid>
            </Grid>
        </Container>
    );
};

export default CartPage;
