import { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import axios from '../../axios';

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

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import FirebaseSocial from './auth-forms/FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import AuthWrapper from './AuthWrapper';

const ForgotPassword = () => {
    const { token } = useParams();
    const [level, setLevel] = useState();
    const [showpassword, setShowpassword] = useState(false);
    const handleClickShowpassword = () => {
        setShowpassword(!showpassword);
    };

    const handleMouseDownpassword = (event) => {
        event.preventDefault();
    };

    const newPassword = async (data) => {
        await axios
            .post(`/api/v1/users/reset/${token}`, data)
            .then((res) => console.log(res))
            .catch((e) => console.log(e));
    };

    const changepassword = (value) => {
        const temp = strengthIndicator(value);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changepassword('');
    }, []);

    return (
        <>
            <AuthWrapper>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Formik
                            initialValues={{
                                password: ''
                            }}
                            validationSchema={Yup.object().shape({
                                password: Yup.string().max(255).required('password is required')
                            })}
                            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                                try {
                                    setStatus({ success: false });
                                    setSubmitting(false);
                                    newPassword(values);
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
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <Stack spacing={1}>
                                                <InputLabel htmlFor="password-signup">New Password</InputLabel>
                                                <OutlinedInput
                                                    fullWidth
                                                    error={Boolean(touched.password && errors.password)}
                                                    id="password-signup"
                                                    type={showpassword ? 'text' : 'password'}
                                                    value={values.password}
                                                    name="password"
                                                    onBlur={handleBlur}
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                        changepassword(e.target.value);
                                                    }}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowpassword}
                                                                onMouseDown={handleMouseDownpassword}
                                                                edge="end"
                                                                size="large"
                                                            >
                                                                {showpassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    placeholder="******"
                                                    inputProps={{}}
                                                />
                                                {touched.password && errors.password && (
                                                    <FormHelperText error id="helper-text-password-signup">
                                                        {errors.password}
                                                    </FormHelperText>
                                                )}
                                            </Stack>
                                            <FormControl fullWidth sx={{ mt: 2 }}>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item>
                                                        <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant="subtitle1" fontSize="0.75rem">
                                                            {level?.label}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </FormControl>
                                        </Grid>
                                        {errors.submit && (
                                            <Grid item xs={12}>
                                                <FormHelperText error>{errors.submit}</FormHelperText>
                                            </Grid>
                                        )}
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
                                                    Save
                                                </Button>
                                            </AnimateButton>
                                        </Grid>
                                    </Grid>
                                </form>
                            )}
                        </Formik>
                    </Grid>
                </Grid>
            </AuthWrapper>
        </>
    );
};

export default ForgotPassword;
