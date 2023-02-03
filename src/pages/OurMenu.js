import AllCarousel from 'components/Carousel';
import React from 'react';
import { Box, Grid, Typography, Stack, Pagination, Container } from '@mui/material';
import ProductCard from '../components/cards/ProductCard/index';
import Footer from 'components/Home/Footer';

const OurMenu = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <>
            <AllCarousel />
            {/* <Box
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
            </Box> */}
            <Container maxWidth="xl">
                <Typography align="center" pt={7} pb={2}>
                    Our Offerd Menu
                </Typography>
                <Typography variant="h1" component="h2" align="center" m="0 auto" pb={7} maxWidth={500}>
                    Some Trendy And Popular Courses Offerd
                </Typography>
                <Grid container spacing={2} zIndex={10} px={5} pb={7}>
                    {arr.map((i) => (
                        <Grid item xs={12} sm={6} md={3} display="flex" flexDirection="column" alignItems="center">
                            <ProductCard key={i} expand={false} />
                        </Grid>
                    ))}
                </Grid>
                <Stack spacing={2} mb={5} style={{ alignItems: 'center' }}>
                    <Pagination count={10} />
                </Stack>
            </Container>
            <Footer />
        </>
    );
};

export default OurMenu;
