import React from 'react';
import { Carousel } from 'antd';
import second from '../../image/bg1.webp';
import { Box, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { overlay } from './Home/HomeCarousel';

const contentStyle = {
    display: 'block',
    height: '750px',
    backgroundImage: 'url(https://i.ibb.co/Qc9Fmsm/bg1.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
};

const AllCarousel = () => {
    return (
        <>
            <Carousel autoplay>
                <div>
                    <Box style={contentStyle}>
                        <Box>
                            <Box style={overlay}></Box>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Typography>OUR MENU</Typography>
                            </Box>
                        </Box>
                    </Box>
                </div>
            </Carousel>
        </>
    );
};

export default AllCarousel;
