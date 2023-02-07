import React, { useState } from 'react';
// material-ui
import {
    Box,
    Button,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';
import Rating from '@mui/material/Rating';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

import AnimateButton from 'components/@extended/AnimateButton';
import { Rate } from 'antd';

const Review = () => {
    const [value, setValue] = useState(1);
    const desc = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    review: '',
                    email: ''
                    // submit: null
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().max(255).required('Name is required'),
                    review: Yup.string().max(255).required('Review is required'),
                    email: Yup.string().email('Must be a valid email').max(255).required('email is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        setStatus({ success: false });
                        setSubmitting(false);
                        console.log({ ...values, rating: value });
                    } catch (err) {
                        console.error(err);
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Typography>There are no reviews yet.</Typography>
                        <Typography>Be the first to review</Typography>

                        <InputLabel htmlFor="name-review">Your Rating *</InputLabel>
                        <Box>
                            <Rate tooltips={desc} onChange={setValue} value={value} />
                            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                        </Box>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="name-review">Your Review *</InputLabel>
                                    <OutlinedInput
                                        id="review"
                                        type="review"
                                        value={values.review}
                                        name="review"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="review"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        error={Boolean(touched.review && errors.review)}
                                    />
                                    {touched.review && errors.review && (
                                        <FormHelperText error id="helper-text-review-review">
                                            {errors.review}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="name-review">Name*</InputLabel>
                                    <OutlinedInput
                                        id="name-review"
                                        type="name"
                                        value={values.name}
                                        name="name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="John"
                                        fullWidth
                                        error={Boolean(touched.name && errors.name)}
                                    />
                                    {touched.name && errors.name && (
                                        <FormHelperText error id="helper-text-name-review">
                                            {errors.name}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-review">Email*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                        id="email"
                                        type="email"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="demo@company.com"
                                        inputProps={{}}
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText error id="helper-text-email-review">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Submit
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default Review;
