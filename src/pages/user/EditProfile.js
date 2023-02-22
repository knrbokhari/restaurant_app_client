import React from 'react';
import {
    Container,
    Box,
    Grid,
    Typography,
    Divider,
    List,
    Button,
    Paper,
    Stack,
    InputLabel,
    OutlinedInput,
    FormHelperText,
    InputAdornment,
    IconButton,
    FormControlLabel,
    FormControl
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

import ChangePassword from 'components/ChangePassword';

const EditProfile = () => {
    return (
        <Container>
            <Typography variant="h1" component="h2" align="center" mt={5} mb={3}>
                Edit Profile
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    <Paper elevation={0} style={{ padding: '25px' }}>
                        <Typography variant="h2" mb={4}>
                            Profile Info
                        </Typography>
                        <Divider />
                        <Box mb={3}></Box>
                        <Formik
                            initialValues={{
                                first_name: '',
                                last_name: '',
                                email: '',
                                address: '',
                                phone: '',
                                role: ''
                            }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                                first_name: Yup.string().max(255).required('First Name is required'),
                                last_name: Yup.string().max(255).required('Last Name is required'),
                                address: Yup.string().max(255),
                                phone: Yup.string().max(255),
                                role: Yup.string().max(255).required('Role is required')
                                // password: Yup.string().max(255).required('Password is required')
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
                                                    disabled
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
                                                <InputLabel htmlFor="first_name-login">First Name</InputLabel>
                                                <OutlinedInput
                                                    id="first_name-login"
                                                    type="first_name"
                                                    value={values.first_name}
                                                    name="first_name"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    placeholder="Enter First Name"
                                                    fullWidth
                                                    error={Boolean(touched.first_name && errors.first_name)}
                                                />
                                                {touched.first_name && errors.first_name && (
                                                    <FormHelperText error id="standard-weight-helper-text-first_name-login">
                                                        {errors.first_name}
                                                    </FormHelperText>
                                                )}
                                            </Stack>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="last_name-login">Last Name</InputLabel>
                                                <OutlinedInput
                                                    id="last_name-login"
                                                    type="last_name"
                                                    value={values.last_name}
                                                    name="last_name"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    placeholder="Enter Last Name"
                                                    fullWidth
                                                    error={Boolean(touched.last_name && errors.last_name)}
                                                />
                                                {touched.last_name && errors.last_name && (
                                                    <FormHelperText error id="standard-weight-helper-text-last_name-login">
                                                        {errors.last_name}
                                                    </FormHelperText>
                                                )}
                                            </Stack>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="role-login">Role</InputLabel>
                                                <OutlinedInput
                                                    id="role-login"
                                                    type="role"
                                                    value={values.role}
                                                    name="role"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    placeholder="Enter Role"
                                                    fullWidth
                                                    error={Boolean(touched.role && errors.role)}
                                                    disabled
                                                />
                                                {touched.role && errors.role && (
                                                    <FormHelperText error id="standard-weight-helper-text-role-login">
                                                        {errors.role}
                                                    </FormHelperText>
                                                )}
                                            </Stack>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="address-login">Your Address</InputLabel>
                                                <OutlinedInput
                                                    id="address-login"
                                                    type="address"
                                                    value={values.address}
                                                    name="address"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    placeholder="Enter Address"
                                                    fullWidth
                                                    error={Boolean(touched.address && errors.address)}
                                                />
                                                {touched.address && errors.address && (
                                                    <FormHelperText error id="standard-weight-helper-text-address-login">
                                                        {errors.address}
                                                    </FormHelperText>
                                                )}
                                            </Stack>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="phone-login">Your Phone</InputLabel>
                                                <OutlinedInput
                                                    id="phone-login"
                                                    type="phone"
                                                    value={values.phone}
                                                    name="phone"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    placeholder="Enter Phone No."
                                                    fullWidth
                                                    error={Boolean(touched.phone && errors.phone)}
                                                />
                                                {touched.phone && errors.phone && (
                                                    <FormHelperText error id="standard-weight-helper-text-phone-login">
                                                        {errors.phone}
                                                    </FormHelperText>
                                                )}
                                            </Stack>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Button
                                                disableElevation
                                                disabled={isSubmitting}
                                                // fullWidth
                                                size="large"
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                            >
                                                Save Profile
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            )}
                        </Formik>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <ChangePassword />
                </Grid>
            </Grid>
        </Container>
    );
};

export default EditProfile;
