import React from 'react';
import { Box, Grid, Typography, Button, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import Autocomplete from '@mui/material/Autocomplete';
import { CustomButtonOne } from './HomeCarousel';

const contentStyle = {
    display: 'block',
    height: '645px',
    backgroundImage: 'url(https://preview.colorlib.com/theme/allfood/assets/img/gallery/section_bg04.png.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const person = [
    { label: '1 Person' },
    { label: '2 Persons' },
    { label: '3 Persons' },
    { label: '4 Persons' },
    { label: '5 Persons' },
    { label: '6 Persons' }
];

const BookATable = () => {
    const [dateValue, setDateValue] = React.useState(null);
    const [timeValue, setTimeValue] = React.useState(null);

    return (
        <>
            <Box style={contentStyle}>
                <Box>
                    <Typography variant="h1" component="h2" align="center" m="0 auto" mb={7} maxWidth={500}>
                        Book A Table
                    </Typography>
                    <Box p={7} style={{ background: '#fff', padding: '50px', borderRadius: '15px' }}>
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={person}
                                        renderInput={(params) => <TextField fullWidth {...params} variant="standard" label="Person" />}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            label="Date"
                                            value={dateValue}
                                            onChange={(newValue) => {
                                                setDateValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField fullWidth variant="standard" {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Stack spacing={3}>
                                            <MobileTimePicker
                                                label="Time"
                                                value={timeValue}
                                                onChange={(newValue) => {
                                                    setTimeValue(newValue);
                                                }}
                                                renderInput={(params) => <TextField variant="standard" {...params} />}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CustomButtonOne fullWidth>Book Now</CustomButtonOne>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default BookATable;
