import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const Services = () => {
    return (
        <>
            <Box
                style={{
                    backgroundImage: 'url(https://i.ibb.co/GV8g5XQ/food-png.webp)',
                    backgroundRepeat: 'repeat'
                    // height: '500px'
                }}
            >
                <Typography variant="h1" component="h2" align="center" pt={7} pb={2}>
                    OUR SERVICES
                </Typography>
                <Typography align="center" m="0 auto" pb={7} maxWidth={500}>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </Typography>
                <Grid container spacing={2} zIndex={10} px={5} pb={7}>
                    <Grid item xs={12} sm={6} md={3} display="flex" flexDirection="column" alignItems="center">
                        <img src="https://i.ibb.co/CvSjpjQ/chef.png" height={200} alt="" />
                        <Typography variant="h3">Best Chef</Typography>
                        <Typography variant="p" align="center">
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} display="flex" flexDirection="column" alignItems="center">
                        <img src="https://i.ibb.co/2vKGNLG/food.png" height={200} alt="" />
                        <Typography variant="h3">Quality Food</Typography>
                        <Typography variant="p" align="center">
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} display="flex" flexDirection="column" alignItems="center">
                        <img src="https://i.ibb.co/zPysRwc/cook.png" height={200} alt="" />
                        <Typography variant="h3">Perfect Cook</Typography>
                        <Typography variant="p" align="center">
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} display="flex" flexDirection="column" alignItems="center">
                        <img src="https://i.ibb.co/mtKDzV9/delivery.png" height={200} alt="" />
                        <Typography variant="h3">Fastest Delivery</Typography>
                        <Typography variant="p" align="center">
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Services;
