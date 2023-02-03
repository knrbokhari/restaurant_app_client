import React from 'react';
import { Carousel } from 'antd';
import { Box, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { activeItem } from 'store/reducers/menu';

const contentStyle = {
    display: 'block',
    height: '750px',
    backgroundImage: 'url(https://i.ibb.co/Qc9Fmsm/bg1.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
};

export const overlay = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: '#000',
    opacity: '.11'
};

export const CustomButtonOne = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    padding: '8px 15px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#eab505',
    borderColor: '#eab505',
    color: '#fff',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
    ].join(','),
    '&:hover': {
        backgroundColor: 'transparent',
        borderColor: '#eab505',
        boxShadow: 'none',
        color: '#eab505'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#eab505',
        borderColor: '#eab505'
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
    }
});

export const CustomButtonTwo = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    padding: '8px 15px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: 'transparent',
    borderColor: '#eab505',
    color: '#eab505',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
    ].join(','),
    '&:hover': {
        backgroundColor: '#eab505',
        borderColor: '#eab505',
        boxShadow: 'none',
        color: '#fff'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        borderColor: '#eab505'
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
    }
});

const HomeCarousel = () => {
    const dispatch = useDispatch();

    const itemHandler = (id) => {
        dispatch(activeItem({ openItem: [id] }));
    };

    return (
        <>
            <Carousel autoplay>
                <div>
                    <Box style={contentStyle}>
                        <Box>
                            <Box style={overlay}></Box>
                            <Grid container spacing={2} height={750} justifyContent="center" alignItems="center" alignContent="center">
                                <Grid item xs={12} md={6} zIndex={1}>
                                    <Box
                                        sx={{
                                            width: { sx: '300px', sm: '400px', md: '500px', xl: 600 },
                                            marginLeft: 'auto',
                                            marginRight: { sm: 'auto' }
                                        }}
                                    >
                                        <img src="https://preview.colorlib.com/theme/pizza/images/bg_1.png.webp" alt="" width="100%" />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} zIndex={1}>
                                    <Box sx={{ display: { sm: 'flex', md: 'block' }, alignItems: 'center', flexDirection: 'column' }}>
                                        <Typography variant="h1" color="#fff" mb={3}>
                                            Italian Cuizine
                                        </Typography>
                                        <Typography variant="h4" color="#fff" mb={2}>
                                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                        </Typography>
                                    </Box>
                                    <Box sx={{ margin: { sm: '0 auto', md: 0 }, width: '265px' }}>
                                        <Link to="/" style={{ marginRight: '15px' }}>
                                            <CustomButtonOne>Order Now</CustomButtonOne>
                                        </Link>
                                        <Link to="menu">
                                            <CustomButtonTwo onClick={() => itemHandler('menu')}>See Menu</CustomButtonTwo>
                                        </Link>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </div>
                <div>
                    <Box style={contentStyle}>
                        <Box>
                            <Box style={overlay}></Box>
                            <Grid
                                container
                                spacing={2}
                                height={750}
                                justifyContent="center"
                                alignItems="center"
                                alignContent="center"
                                sx={{ flexDirection: 'row-reverse' }}
                            >
                                <Grid item xs={12} md={6} zIndex={1}>
                                    <Box
                                        sx={{
                                            width: { sx: '300px', sm: '400px', md: '500px', xl: 600 },
                                            marginLeft: 'auto',
                                            marginRight: { sm: 'auto' }
                                        }}
                                    >
                                        <img src="https://preview.colorlib.com/theme/pizza/images/bg_1.png.webp" alt="" width="100%" />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} zIndex={1}>
                                    <Box
                                        sx={{
                                            display: { sm: 'flex', md: 'block' },
                                            alignItems: 'center',
                                            flexDirection: 'column',
                                            textAlign: { sm: 'center', md: 'end' }
                                        }}
                                    >
                                        <Typography variant="h1" color="#fff" mb={3}>
                                            Italian Cuizine
                                        </Typography>
                                        <Typography variant="h4" color="#fff" mb={2}>
                                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                        </Typography>
                                    </Box>
                                    <Box sx={{ margin: { sm: '0 auto', md: '0 0 0 auto' }, width: '265px' }}>
                                        <Link to="/" style={{ marginRight: '15px' }}>
                                            <CustomButtonOne>Order Now</CustomButtonOne>
                                        </Link>
                                        <Link to="menu">
                                            <CustomButtonTwo onClick={() => itemHandler('menu')}>See Menu</CustomButtonTwo>
                                        </Link>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </div>
                <div>
                    <Box style={contentStyle}>
                        <Box>
                            <Box style={overlay}></Box>
                            <Grid container spacing={2} height={750} justifyContent="center" alignItems="center" alignContent="center">
                                <Grid item xs={12} md={6} zIndex={1}>
                                    <Box
                                        sx={{
                                            width: { sx: '300px', sm: '400px', md: '500px', xl: 600 },
                                            marginLeft: 'auto',
                                            marginRight: { sm: 'auto' }
                                        }}
                                    >
                                        <img src="https://preview.colorlib.com/theme/pizza/images/bg_1.png.webp" alt="" width="100%" />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} zIndex={1}>
                                    <Box sx={{ display: { sm: 'flex', md: 'block' }, alignItems: 'center', flexDirection: 'column' }}>
                                        <Typography variant="h1" color="#fff" mb={3}>
                                            Italian Cuizine
                                        </Typography>
                                        <Typography variant="h4" color="#fff" mb={2}>
                                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                        </Typography>
                                    </Box>
                                    <Box sx={{ margin: { sm: '0 auto', md: 0 }, width: '265px' }}>
                                        <Link to="/" style={{ marginRight: '15px' }}>
                                            <CustomButtonOne>Order Now</CustomButtonOne>
                                        </Link>
                                        <Link to="menu">
                                            <CustomButtonTwo onClick={() => itemHandler('menu')}>See Menu</CustomButtonTwo>
                                        </Link>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </div>
                <div>
                    <Box style={contentStyle}>
                        <Box>
                            <Box style={overlay}></Box>
                            <Grid container spacing={2} height={750} justifyContent="center" alignItems="center">
                                <Grid item xs={12} md={6} zIndex={1}>
                                    {/* <Box> */}
                                    <Typography variant="h1" color="#fff" mb={3} style={{ textAlign: 'center' }}>
                                        We cooked your desired Pizza Recipe
                                    </Typography>
                                    <Typography variant="h4" color="#fff" mb={2} style={{ textAlign: 'center' }}>
                                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Link to="/" style={{ marginRight: '15px' }}>
                                            <CustomButtonOne>Order Now</CustomButtonOne>
                                        </Link>
                                        <Link to="menu">
                                            <CustomButtonTwo onClick={() => itemHandler('menu')}>See Menu</CustomButtonTwo>
                                        </Link>
                                    </Box>
                                    {/* </Box> */}
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </div>
            </Carousel>
        </>
    );
};

export default HomeCarousel;
