import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import axios from '../../../axios';

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
import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| FIREBASE - REGISTER ||============================ //

const AuthRegister = () => {
    const [level, setLevel] = useState();
    const [showpassword, setShowpassword] = useState(false);
    const handleClickShowpassword = () => {
        setShowpassword(!showpassword);
    };

    const handleMouseDownpassword = (event) => {
        event.preventDefault();
    };

    const registerUser = async (data) => {
        // console.log(data);
        await axios
            .post('/api/v1/users/register', data)
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
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    email: '',
                    role: 'user',
                    password: ''
                    // submit: null
                }}
                validationSchema={Yup.object().shape({
                    first_name: Yup.string().max(255).required('First Name is required'),
                    last_name: Yup.string().max(255).required('Last Name is required'),
                    email: Yup.string().email('Must be a valid email').max(255).required('email is required'),
                    password: Yup.string().max(255).required('password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        setStatus({ success: false });
                        setSubmitting(false);
                        registerUser(values);
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
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="first_name-signup">First Name*</InputLabel>
                                    <OutlinedInput
                                        id="first_name-login"
                                        type="first_name"
                                        value={values.first_name}
                                        name="first_name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="John"
                                        fullWidth
                                        error={Boolean(touched.first_name && errors.first_name)}
                                    />
                                    {touched.first_name && errors.first_name && (
                                        <FormHelperText error id="helper-text-first_name-signup">
                                            {errors.first_name}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="last_name-signup">Last Name*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.last_name && errors.last_name)}
                                        id="last_name-signup"
                                        type="last_name"
                                        value={values.last_name}
                                        name="last_name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Doe"
                                        inputProps={{}}
                                    />
                                    {touched.last_name && errors.last_name && (
                                        <FormHelperText error id="helper-text-last_name-signup">
                                            {errors.last_name}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            {/* <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="company-signup">Company</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.company && errors.company)}
                                        id="company-signup"
                                        value={values.company}
                                        name="company"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Demo Inc."
                                        inputProps={{}}
                                    />
                                    {touched.company && errors.company && (
                                        <FormHelperText error id="helper-text-company-signup">
                                            {errors.company}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid> */}
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-signup">email Address*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                        id="email-login"
                                        type="email"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="demo@company.com"
                                        inputProps={{}}
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText error id="helper-text-email-signup">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="password-signup">password</InputLabel>
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
                            <Grid item xs={12}>
                                <Typography variant="body2">
                                    By Signing up, you agree to our &nbsp;
                                    <Link variant="subtitle2" component={RouterLink} to="#">
                                        Terms of Service
                                    </Link>
                                    &nbsp; and &nbsp;
                                    <Link variant="subtitle2" component={RouterLink} to="#">
                                        Privacy Policy
                                    </Link>
                                </Typography>
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
                                        Create Account
                                    </Button>
                                </AnimateButton>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider>
                                    <Typography variant="caption">Sign up with</Typography>
                                </Divider>
                            </Grid>
                            <Grid item xs={12}>
                                <FirebaseSocial />
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default AuthRegister;
