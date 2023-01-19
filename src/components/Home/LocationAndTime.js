import React from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';

const LocationAndTime = () => {
    return (
        <>
            <Box
                sx={{
                    py: 5,
                    color: '#fff',
                    backgroundColor: '#000',
                    border: '1px solid #000'
                }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={2} zIndex={10}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="subtitle1" component="div">
                                000 (123) 456 7890
                            </Typography>
                            <Typography variant="body">A small river named Duden flows</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="subtitle1" component="div">
                                198 West 21th Street
                            </Typography>
                            <Typography variant="body">Suite 721 New York NY 10016</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="subtitle1" component="div">
                                Open Monday-Friday
                            </Typography>
                            <Typography variant="body">8:00am - 9:00pm</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="subtitle1" component="div">
                                Standard license
                            </Typography>
                            <Typography variant="body">Full</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default LocationAndTime;
