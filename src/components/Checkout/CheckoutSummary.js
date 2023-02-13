import React from 'react';
import { Paper, Typography, Box, Divider, Button, TextField } from '@mui/material';

const CheckoutSummary = () => {
    return (
        <>
            <Paper variant="outlined" sx={{ padding: '30px' }}>
                <Typography mb={2} align="center" sx={{ fontSize: '25px' }}>
                    Order Details
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
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '5px 0 10px' }}>
                    <Typography sx={{ fontSize: '17px' }}>Discount:</Typography>
                    <Typography sx={{ fontSize: '17px' }}>$0.00</Typography>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', margin: '15px 0 20px' }}>
                    <TextField id="outlined-basic" label="Promo Code" variant="standard" sx={{ fontSize: '18px' }} fullWidth />
                    <Button variant="contained" color="success" sx={{ fontSize: '18px', paddingLeft: '25px', paddingRight: '25px' }}>
                        Apply
                    </Button>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '20px 0' }}>
                    <Typography sx={{ fontSize: '20px' }}>Order Total:</Typography>
                    <Typography sx={{ fontSize: '20px' }}>$110.00</Typography>
                </Box>
                <Divider />
                <Button variant="contained" fullWidth sx={{ margin: '10px 0', fontSize: '17px' }}>
                    Order Now
                </Button>
            </Paper>
        </>
    );
};

export default CheckoutSummary;
