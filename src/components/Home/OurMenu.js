import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import ProductCard from '../../components/cards/ProductCard/index';

const OurMenu = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
            <Box>
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
            </Box>
        </>
    );
};

export default OurMenu;
