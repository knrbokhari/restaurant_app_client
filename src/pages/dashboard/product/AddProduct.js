import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Select, Box, Grid, Stack, Button, Autocomplete, Chip } from '@mui/material';

const AddProduct = () => {
    const options = [{ value: 'Normal' }, { value: 'Medium' }, { value: 'Large' }];

    return (
        <>
            <Box>
                <Formik
                    initialValues={{
                        name: '',
                        price: 0,
                        description: '',
                        time: 0,
                        discount: 0,
                        size: []
                        // image: []
                    }}
                    validationSchema={Yup.object().shape({
                        // name: Yup.string().required('Name is required'),
                        // price: Yup.number().required('Price is required'),
                        // description: Yup.string().required('Description is required'),
                        // time: Yup.number().required('Time is required'),
                        // discount: Yup.number().required('Discount is required'),
                        size: Yup.object().shape({
                            value: Yup.string().required('Required')
                        })
                        // image: Yup.array().of(Yup.string()).required('Image is required')
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
                                    <Field component={TextField} name="name" type="text" label="Name" margin="normal" fullWidth />
                                    <ErrorMessage name="name" component="div" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Field component={TextField} name="price" type="number" label="Price" margin="normal" fullWidth />
                                    <ErrorMessage name="price" component="div" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Field component={TextField} name="time" type="number" label="Time" margin="normal" fullWidth />
                                    <ErrorMessage name="time" component="div" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Field component={TextField} name="discount" type="number" label="Discount" margin="normal" fullWidth />
                                    <ErrorMessage name="discount" component="div" />
                                </Grid>
                                {/* <Grid item xs={12}></Grid> */}
                                <Grid item xs={12}>
                                    <TextField
                                        select
                                        label="Select Options"
                                        name="selectedOptions"
                                        multiple
                                        value={values.size}
                                        onChange={(e) =>
                                            Array.from(e.target.size, (item) => ({
                                                value: item.value
                                            }))
                                        }
                                        helperText={touched.selectedOptions ? errors.selectedOptions : ''}
                                        error={Boolean(touched.selectedOptions && errors.selectedOptions)}
                                        fullWidth
                                    >
                                        {options.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.value}
                                            </option>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        component={TextField}
                                        name="description"
                                        type="text"
                                        label="Description"
                                        margin="normal"
                                        fullWidth
                                    />
                                    <ErrorMessage name="description" component="div" />
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
            </Box>
        </>
    );
};

export default AddProduct;
