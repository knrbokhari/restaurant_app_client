import React, { useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    Button,
    Form,
    FormControl,
    FormLabel,
    Checkbox,
    RadioGroup,
    FormGroup,
    FormControlLabel,
    Radio,
    TextField,
    Container
} from '@mui/material';

const ProductForm = () => {
    const [size, setSize] = useState(0);
    const [boiledEgg, setBoiledEgg] = useState(0);
    const [sweetCorn, setSweetCorn] = useState(0);
    const [redBean, setRedBean] = useState(0);
    const [broccoli, setBroccoli] = useState(0);
    const [pumpkin, setPumpkin] = useState(0);
    const [beetroot, setBeetroot] = useState(0);

    const setOptions = () => {};

    return (
        <Box>
            <form>
                <FormControl>
                    <FormLabel id="label-placement">Size</FormLabel>
                    <RadioGroup row aria-labelledby="placement" name="position" onClick={(e) => setSize(e.target.value)} defaultValue="0">
                        <FormControlLabel value="0" control={<Radio />} label="Normal" />
                        <FormControlLabel value="3" control={<Radio />} label="Medium (+$3.00)" />
                        <FormControlLabel value="5" control={<Radio />} label="Large (+$5.00)" />
                    </RadioGroup>
                </FormControl>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Boiled Egg (+ $0.50)" />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Sweet Corn (+$0.50)" />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Red Bean (+$0.50)" />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Broccoli (+$0.50)" />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Pumpkin (+$0.50)" />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Beetroot (+$0.50)" />
                        </FormGroup>
                    </Grid>
                </Grid>

                <FormGroup>
                    <FormLabel id="label-placement">Extra Request</FormLabel>
                    <TextField id="standard-multiline-static" label="Extra Request" multiline rows={4} variant="standard" />
                </FormGroup>
            </form>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Product total</Typography>
                <Typography>$12.55</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Options total</Typography>
                <Typography>$12.55</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Grand total</Typography>
                <Typography>$12.55</Typography>
            </Box>
            <FormGroup>
                <TextField type="number" defaultValue="1" sx={{ width: '70px' }} />
            </FormGroup>
            <Button>Add to cart</Button>
        </Box>
    );
};

export default ProductForm;
