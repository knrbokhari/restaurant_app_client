/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Box, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

const textStyle = {
    wordWrap: 'normal',
    color: 'black',
    fontWeight: 700,
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
};

const index = () => {
    return (
        <>
            <Card sx={{ width: '100%' }}>
                <CardContent style={{ padding: 10 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={textStyle}>Cafe Sreemangal & Chinese</Typography>
                        <Typography>0/5(0)</Typography>
                    </Box>
                </CardContent>
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '200px',
                        // margin: '10px',
                        overflow: 'hidden',
                        transition: 'all .2s linear'
                    }}
                >
                    <CardMedia
                        sx={{
                            width: '100%',
                            transition: 'all .2s linear',
                            ':hover': {
                                transform: 'scale(1.1)'
                            }
                        }}
                        component="img"
                        height="200"
                        image="https://mui.com/static/images/cards/paella.jpg"
                        alt="Paella dish"
                    />
                </Box>

                <CardContent style={{ padding: 10 }}>
                    <Typography sx={{ fontWeight: 600 }}>
                        Price: <del>$200</del> <span>$150</span>
                    </Typography>
                    <button>Add to Cart</button>
                </CardContent>
            </Card>
        </>
    );
};

export default index;
