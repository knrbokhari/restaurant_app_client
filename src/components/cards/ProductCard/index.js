/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Box, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { CustomButtonTwo } from 'components/Home/HomeCarousel';
import { Link } from 'react-router-dom';
import { useAddToCartMutation } from 'app/appApi/appApi';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const textStyle = {
    wordWrap: 'normal',
    color: 'black',
    fontWeight: 700,
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
};

const index = ({ product }) => {
    const user = useSelector((state) => state.user);
    const [addToCart, { isSuccess, error }] = useAddToCartMutation();

    if (isSuccess) {
        toast.success(`${product.name} add to cart`);
    }
    return (
        <>
            <Card sx={{ width: '100%', position: 'relative' }}>
                {/* <CardContent style={{ padding: 10 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={textStyle}>Cafe Sreemangal & Chinese</Typography>
                        <Typography>0/5(0)</Typography>
                    </Box>
                </CardContent> */}
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '200px',
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
                <Typography
                    sx={{
                        padding: '3px 15px 0',
                        background: '#ffc400',
                        top: '55px',
                        position: 'absolute',
                        color: '#fff',
                        fontWeight: 600,
                        borderRadius: '0 8px 8px 0'
                    }}
                >
                    10% OFF
                </Typography>
                <CardContent style={{ padding: 10 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Link to="/menu/1">
                            <Typography style={textStyle} onclick={() => navigator('/')}>
                                Cafe Sreemangal & Chinese
                            </Typography>
                        </Link>
                        <Typography>0/5(0)</Typography>
                    </Box>
                    <Typography>category:</Typography>
                    <Typography sx={{ fontWeight: 700 }} mb={2}>
                        Price: <del>$200</del> <span> $150</span>
                    </Typography>
                    <CustomButtonTwo
                        sx={{ fontSize: '16px', width: '100%' }}
                        onClick={() => {
                            addToCart({
                                clientId: user?._id,
                                productId: product?._id,
                                price: product?.price
                            });
                        }}
                    >
                        Add to Cart
                    </CustomButtonTwo>
                </CardContent>
            </Card>
        </>
    );
};

export default index;
