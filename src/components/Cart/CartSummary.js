import React from 'react';
import { Box, Grid, Typography, Divider, Paper, Container, Button } from '@mui/material';

const CartSummary = () => {
    return (
        <>
            <Paper variant="outlined" sx={{ padding: '30px' }}>
                <Typography mb={2} align="center" sx={{ fontSize: '25px' }}>
                    Cart Summary
                </Typography>
                <Divider />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '10px 0 0' }}>
                    <Typography sx={{ fontSize: '17px' }}>Subtotal(2 Items):</Typography>
                    <Typography sx={{ fontSize: '17px' }}>$100.00</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '5px 0 10px' }}>
                    <Typography sx={{ fontSize: '17px' }}>Delivery:</Typography>
                    <Typography sx={{ fontSize: '17px' }}>$10.00</Typography>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '10px 0' }}>
                    <Typography sx={{ fontSize: '20px' }}>Order Total:</Typography>
                    <Typography sx={{ fontSize: '20px' }}>$110.00</Typography>
                </Box>
                <Divider />
                <Button fullWidth sx={{ margin: '10px 0', fontSize: '17px' }}>
                    Checkout Now
                </Button>
                <Typography sx={{ fontSize: '16px' }}>
                    This site is Protected reCAPTCHA and the Google <span>Privacy Policy</span> and <span>Tarms Of Service</span> apply.
                </Typography>
            </Paper>
        </>
    );
};

export default CartSummary;
