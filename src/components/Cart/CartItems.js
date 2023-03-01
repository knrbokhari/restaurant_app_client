import React from 'react';
import { Box, Grid, Typography, Divider, Paper, Container, IconButton } from '@mui/material';
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDecreaseCartProductMutation, useIncreaseCartProductMutation, useRemoveFromCartMutation } from 'app/appApi/appApi';
import { useSelector } from 'react-redux';

const CartItems = () => {
    const user = useSelector((state) => state.user);
    const [increaseCart] = useIncreaseCartProductMutation();
    const [decreaseCart] = useDecreaseCartProductMutation();
    const [removeFromCart, { isLoading }] = useRemoveFromCartMutation();
    const navigate = useNavigate();
    const cart = [1, 2, 3, 4];

    return (
        <>
            <Box>
                {cart.map((item) => (
                    <Paper
                        variant="outlined"
                        sx={{
                            padding: '7px 5px 5px 10px',
                            ':hover': {
                                boxShadow: '0 0 0 0.1rem rgba(0,123,255,.5)'
                            },
                            marginBottom: '10px'
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <img src="https://preview.colorlib.com/theme/pizza/images/bg_1.png.webp" alt="" width={100} height={100} />
                            <Box sx={{ width: '100%', marginLeft: '15px' }}>
                                <Typography>Italian Cuizine</Typography>
                                <Typography>Price: $15.55</Typography>
                                <Typography>Size: Normal</Typography>
                                <Divider />
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography>Qty:</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton
                                            onClick={() =>
                                                decreaseCart({
                                                    cartId: item?.cartId?._id
                                                })
                                            }
                                        >
                                            <MinusOutlined />
                                        </IconButton>
                                        <Typography mx={1}>1</Typography>
                                        <IconButton>
                                            <PlusOutlined
                                                onClick={() =>
                                                    increaseCart({
                                                        cartId: item?.cartId?._id
                                                    })
                                                }
                                            />
                                        </IconButton>
                                    </Box>
                                    <Typography>$200.00</Typography>
                                </Box>
                            </Box>
                            <IconButton>
                                <CloseOutlined
                                    onClick={() =>
                                        removeFromCart({
                                            cartId: item?.cartId?._id
                                        })
                                    }
                                />
                            </IconButton>
                        </Box>
                    </Paper>
                ))}
            </Box>
        </>
    );
};

export default CartItems;
