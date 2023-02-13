import React from 'react';
import {
    Button,
    FormHelperText,
    Grid,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    Paper,
    FormLabel,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

import AnimateButton from 'components/@extended/AnimateButton';

const CheckoutInfo = () => {
    return (
        <Paper variant="outlined" sx={{ padding: '30px' }}>
            <Formik
                initialValues={{
                    email: '',
                    name: '',
                    number: '',
                    adderss: '',
                    payment_Methods: ''
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    name: Yup.string().max(255).required('Name is required'),
                    number: Yup.string().max(255).required('Number is required'),
                    adderss: Yup.string().max(255).required('Adderss is required'),
                    payment_Methods: Yup.string().oneOf(['Credit Card', 'PayPal']).required('Payment Methods is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        setStatus({ success: false });
                        setSubmitting(false);
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
                            <Grid item xs={12}>
                                <Typography>Step 1 of 2</Typography>
                                <Typography>Checkout Information</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-login">Your Name</InputLabel>
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
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-login">Email Address</InputLabel>
                                    <OutlinedInput
                                        id="email-login"
                                        type="email"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Enter email address"
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText error id="standard-weight-helper-text-email-login">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="number-login">Your Number</InputLabel>
                                    <OutlinedInput
                                        id="number-login"
                                        type="number"
                                        value={values.number}
                                        name="number"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Enter number address"
                                        fullWidth
                                        error={Boolean(touched.number && errors.number)}
                                    />
                                    {touched.number && errors.number && (
                                        <FormHelperText error id="standard-weight-helper-text-number-login">
                                            {errors.number}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="adderss-login">Your Address</InputLabel>
                                    <OutlinedInput
                                        id="adderss-login"
                                        type="adderss"
                                        value={values.adderss}
                                        name="adderss"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Enter adderss address"
                                        fullWidth
                                        error={Boolean(touched.adderss && errors.adderss)}
                                    />
                                    {touched.adderss && errors.adderss && (
                                        <FormHelperText error id="standard-weight-helper-text-adderss-login">
                                            {errors.adderss}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <Typography>Step 1 of 2</Typography>
                                    <Typography>Payment Information</Typography>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Payment Method</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-label="Payment Method"
                                            name="payment_Methods"
                                            value={values.payment_Methods}
                                            onChange={handleChange}
                                        >
                                            <FormControlLabel value="Credit Card" control={<Radio />} label="Credit Card" />
                                            <FormControlLabel value="PayPal" control={<Radio />} label="Paypal" />
                                            <FormControlLabel value="PayPal" control={<Radio />} label="Paypal" />
                                        </RadioGroup>
                                        {touched.payment_Methods && errors.payment_Methods && (
                                            <FormHelperText error>{errors.payment_Methods}</FormHelperText>
                                        )}
                                    </FormControl>
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Confirm
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </Paper>
    );
};

export default CheckoutInfo;
