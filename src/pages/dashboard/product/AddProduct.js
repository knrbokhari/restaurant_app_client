import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Paper, Box, Grid, Stack, Button, InputLabel, OutlinedInput, FormHelperText, Typography, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useCreateProductMutation } from '../../../app/appApi/appApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from '../../../axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { logout } from 'fetaures/user/userSlice';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15
        },
        '& .MuiImageMarked-root': {
            opacity: 0
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor'
        }
    }
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity')
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
}));

const AddProduct = () => {
    const [createProduct, { isError, error, isLoading, isSuccess }] = useCreateProductMutation();
    const [images, setImages] = useState([]);
    const [imgToRemove, setImgToRemove] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // get Bearer token from Cookie
    const token = `Bearer ${Cookies.get('token')}`;

    const showWidget = () => {
        const widget = window.cloudinary.createUploadWidget(
            {
                cloudName: 'dbnaeem',
                uploadPreset: 'l7km97n1'
            },
            (error, result) => {
                if (!error && result.event === 'success') {
                    setImages((prev) => [...prev, { url: result.info.url, public_id: result.info.public_id }]);
                    console.log(result);
                }
            }
        );
        widget.open();
    };

    const handleRemoveImg = (imgObj) => {
        setImgToRemove(imgObj.public_id);
        axios
            .delete(`/api/v1/products/images/${imgObj.public_id}/`, {
                headers: { Authorization: token }
            })
            .then((res) => {
                setImgToRemove(null);
                setImages((prev) => prev.filter((img) => img.public_id !== imgObj.public_id));
                console.log(res);
            })
            .catch((e) => console.log(e));
    };

    const handleCreateProduct = (data) => {
        const { name, description, price, time, discount, images } = data;
        createProduct({
            name,
            description,
            price: Number(price).toFixed(2),
            time: Number(time).toFixed(2),
            discount: discount(time).toFixed(2),
            images
        }).then((res) => {
            console.log(res);
            if (res.status === 403 || res.status === 401) {
                dispatch(logout());
                navigate('/login');
                Cookies.remove('token');
            }
            if (res.data.success > 0) {
                setTimeout(() => {
                    navigate('/');
                    toast.success('Product Created');
                }, 1500);
            }
        });
    };

    return (
        <>
            <Box>
                <Typography align="center" variant="h3" my={5}>
                    Add Product
                </Typography>
                <Paper variant="outlined" sx={{ padding: '30px' }}>
                    <Formik
                        initialValues={{
                            name: '',
                            price: '',
                            description: '',
                            time: '',
                            discount: '',
                            images: images
                        }}
                        validationSchema={Yup.object().shape({
                            name: Yup.string().required('Name is required'),
                            price: Yup.string().required('Price is required'),
                            description: Yup.string().required('Description is required'),
                            time: Yup.string().required('Time is required'),
                            discount: Yup.string().required('Discount is required')
                        })}
                        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                            try {
                                setStatus({ success: false });
                                setSubmitting(false);
                                handleCreateProduct(values);
                            } catch (err) {
                                setStatus({ success: false });
                                setErrors({ submit: err.message });
                                setSubmitting(false);
                            }
                        }}
                    >
                        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                            <form noValidate onSubmit={handleSubmit}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="email-login">Product Name:</InputLabel>
                                            <OutlinedInput
                                                id="email-login"
                                                type="email"
                                                value={values.name}
                                                name="name"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Enter name address"
                                                fullWidth
                                                error={Boolean(touched.name && errors.name)}
                                            />
                                            {touched.name && errors.name && (
                                                <FormHelperText error id="standard-weight-helper-text-name-login">
                                                    {errors.name}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="email-login">Price:</InputLabel>
                                            <OutlinedInput
                                                id="email-login"
                                                type="number"
                                                value={values.price}
                                                name="price"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Enter Price"
                                                fullWidth
                                                error={Boolean(touched.price && errors.price)}
                                            />
                                            {touched.price && errors.price && (
                                                <FormHelperText error id="standard-weight-helper-text-name-login">
                                                    {errors.price}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="email-login">Time (min):</InputLabel>
                                            <OutlinedInput
                                                id="email-login"
                                                type="number"
                                                value={values.time}
                                                name="time"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Enter Time"
                                                fullWidth
                                                error={Boolean(touched.time && errors.time)}
                                            />
                                            {touched.time && errors.time && (
                                                <FormHelperText error id="standard-weight-helper-text-name-login">
                                                    {errors.time}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="email-login">Discount:</InputLabel>
                                            <OutlinedInput
                                                id="email-login"
                                                type="number"
                                                value={values.discount}
                                                name="discount"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Enter Discount"
                                                fullWidth
                                                error={Boolean(touched.discount && errors.discount)}
                                            />
                                            {touched.discount && errors.discount && (
                                                <FormHelperText error id="standard-weight-helper-text-name-login">
                                                    {errors.discount}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="email-login">Description:</InputLabel>
                                            <OutlinedInput
                                                id="email-login"
                                                type="text"
                                                multiline
                                                rows={5}
                                                value={values.description}
                                                name="description"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Enter Description"
                                                fullWidth
                                                error={Boolean(touched.description && errors.description)}
                                            />
                                            {touched.description && errors.description && (
                                                <FormHelperText error id="standard-weight-helper-text-name-login">
                                                    {errors.description}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack spacing={1}>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} sm={6} md={3}>
                                                    <Paper
                                                        sx={{
                                                            width: '100%',
                                                            border: '1px dashed black',
                                                            borderRedius: '10px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            flexDirection: 'column',
                                                            height: 200,
                                                            cursor: 'pointer'
                                                        }}
                                                        onClick={showWidget}
                                                    >
                                                        <PlusOutlined />
                                                        <Typography>Upload Images</Typography>
                                                    </Paper>
                                                </Grid>
                                                {images &&
                                                    images.map((image) => (
                                                        <Grid item xs={12} sm={6} md={3}>
                                                            <ImageButton
                                                                focusRipple
                                                                key={image?.title}
                                                                style={{
                                                                    width: '100%',
                                                                    height: 200
                                                                }}
                                                            >
                                                                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                                                                <ImageBackdrop className="MuiImageBackdrop-root" />
                                                                <Image>
                                                                    <Typography
                                                                        component="span"
                                                                        variant="subtitle1"
                                                                        color="red"
                                                                        sx={{
                                                                            position: 'relative',
                                                                            p: 2,
                                                                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`
                                                                        }}
                                                                    >
                                                                        <DeleteOutlined
                                                                            onClick={() => handleRemoveImg(image)}
                                                                            style={{ fontSize: 25 }}
                                                                        />
                                                                    </Typography>
                                                                </Image>
                                                            </ImageButton>
                                                        </Grid>
                                                    ))}
                                            </Grid>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button disableElevation size="large" type="submit" variant="contained" color="primary">
                                            Create
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </Formik>
                </Paper>
            </Box>
        </>
    );
};

export default AddProduct;
