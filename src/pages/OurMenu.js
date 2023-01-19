import AllCarousel from 'components/Carousel';
import React from 'react';
import { Box, Grid, Typography, Button, Paper } from '@mui/material';

const OurMenu = () => {
    return (
        <>
            <AllCarousel />
            <Box
                display="flex"
                height={300}
                justifyContent="center"
                alignItems="center"
                style={{ background: '#000', flexDirection: 'column' }}
            >
                <Typography variant="h1" component="h2" color="#fff" mb={2}>
                    OUR MENU PRICING
                </Typography>
                <Typography color="#fff" maxWidth={350} align="center">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </Typography>
            </Box>
        </>
    );
};

export default OurMenu;
