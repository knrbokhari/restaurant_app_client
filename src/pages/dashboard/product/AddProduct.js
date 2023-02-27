import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    TextField,
    Paper,
    Select,
    Box,
    Grid,
    Stack,
    Button,
    Autocomplete,
    Chip,
    InputLabel,
    OutlinedInput,
    FormHelperText,
    Typography
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [images, setImages] = useState([]);
    const [imgToRemove, setImgToRemove] = useState(null);
    // const [category, setCategory] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const showWidget = () => {
        const widget = window.cloudinary.createUploadWidget(
            {
                cloudName: 'dbnaeem',
                uploadPreset: 'l7km97n1'
            },
            (error, result) => {
                if (!error && result.event === 'success') {
                    setImages((prev) => [...prev, { url: result.info.url, public_id: result.info.public_id }]);
                }
            }
        );
        widget.open();
    };

    const handleRemoveImg = (imgObj) => {
        setImgToRemove(imgObj.public_id);
        axios
            .delete(`/images/${imgObj.public_id}/`, {
                headers: { Authorization: token }
            })
            .then((res) => {
                setImgToRemove(null);
                setImages((prev) => prev.filter((img) => img.public_id !== imgObj.public_id));
            })
            .catch((e) => console.log(e));
    };

    return (
        <>
            <Box>
                <Typography>Add Product</Typography>
                <Paper variant="outlined" sx={{ padding: '30px' }}>
                    <Formik
                        initialValues={{
                            name: '',
                            price: 0,
                            description: '',
                            time: 0,
                            discount: 0,
                            image: []
                        }}
                        validationSchema={Yup.object().shape({
                            name: Yup.string().required('Name is required'),
                            price: Yup.number().required('Price is required'),
                            description: Yup.string().required('Description is required'),
                            time: Yup.number().required('Time is required'),
                            discount: Yup.number().required('Discount is required'),
                            image: Yup.array().of(Yup.string()).required('Image is required')
                        })}
                        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                            try {
                                setStatus({ success: false });
                                setSubmitting(false);
                                console.log(values);
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
                                                type="text"
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
                                        <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary">
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
