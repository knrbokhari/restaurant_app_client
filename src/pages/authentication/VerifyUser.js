import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from '../../axios';

// material-ui
import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';
// project import
import AuthLogin from './auth-forms/AuthLogin';
import AuthWrapper from './AuthWrapper';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

import AnimateButton from 'components/@extended/AnimateButton';

const VerifyUser = () => {
    const { token } = useParams();
    const [success, setSuccess] = useState(false);
    const [successTocken, setSuccessTocken] = useState(false);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        const verifyUser = async () => {
            await axios
                .get(`/api/v1/users/verify/${token}`)
                .then((res) => {
                    console.log(res);
                    setSuccessTocken(res.data.success);
                    setSuccess(res.data.success);
                    setMsg(res.data.msg);
                })
                .catch((e) => {
                    setMsg(e.response.data.message);
                    setSuccess(false);
                });
        };
        verifyUser();
    }, [token]);

    const ReSendVerifyEmail = async (data) => {
        await axios
            .post('/api/v1/users/send-verify-token', data)
            .then((res) => {
                console.log(res);
                setSuccess(res.data.success);
                setMsg(res.data.msg);
            })
            .catch((e) => {
                setMsg(e.response.data.message);
                setSuccess(false);
            });
    };

    return (
        <>
            <AuthWrapper>
                <Grid container spacing={3}>
                    <Grid item sx={12}>
                        <Typography sx={{ textAlign: 'center', color: `${success || successTocken ? 'green' : 'red'}` }}>{msg}.</Typography>
                        {success ? (
                            successTocken && (
                                <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                                    Please login
                                </Typography>
                            )
                        ) : (
                            <>
                                <Formik
                                    initialValues={{
                                        email: ''
                                    }}
                                    validationSchema={Yup.object().shape({
                                        email: Yup.string().email('Must be a valid email').max(255).required('Email is required')
                                    })}
                                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                                        try {
                                            setStatus({ success: false });
                                            setSubmitting(false);
                                            ReSendVerifyEmail(values);
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
                                                        />
                                                        {touched.email && errors.email && (
                                                            <FormHelperText error id="standard-weight-helper-text-email-login">
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
                                                            fullWidth
                                                            size="large"
                                                            type="submit"
                                                            variant="contained"
                                                            color="primary"
                                                        >
                                                            Re-Send Verify Email
                                                        </Button>
                                                    </AnimateButton>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    )}
                                </Formik>
                            </>
                        )}
                    </Grid>
                </Grid>
            </AuthWrapper>
        </>
    );
};

export default VerifyUser;
