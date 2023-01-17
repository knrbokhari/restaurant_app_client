import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const Wellcome = () => {
    return (
        <>
            <Box>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box
                            style={{
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'bottom',
                                backgroundSize: 'cover',
                                height: '450px'
                            }}
                        ></Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        color="white"
                        style={{ background: '#1e1d1d' }}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box px={5} py={5}>
                            <Typography variant="h1" mb={3} sx={{ textAlign: { sm: 'center', md: 'left' } }}>
                                WELCOME TO OUR <span style={{ color: '#faad14' }}>RESTAURANT</span>
                            </Typography>
                            <Typography variant="body" component="div" sx={{ textAlign: { sm: 'center', md: 'justify' } }}>
                                <p>
                                    On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have
                                    been rewritten a thousand times and everything that was left from its origin would be the word "and" and
                                    the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said
                                    could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her
                                    drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
                                </p>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Wellcome;
