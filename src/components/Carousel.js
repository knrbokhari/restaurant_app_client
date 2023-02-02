import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { overlay } from './Home/HomeCarousel';

const contentStyle = {
    display: 'block',
    height: '550px',
    backgroundImage: 'url(https://i.ibb.co/Qc9Fmsm/bg1.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
};

const AllCarousel = () => {
    return (
        <>
            <Box style={contentStyle}>
                <Box>
                    <Box style={overlay} sx={{ height: 600 }}></Box>
                    <Box display="flex" height={550} justifyContent="center" alignItems="center">
                        <Typography variant="h1" component="h2" color="#fff">
                            OUR MENU
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default AllCarousel;
