import React from 'react';
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
import { useParams } from 'react-router';
import DescriptionAndReview from 'components/Product/DescriptionAndReview';
import ProductCard from '../../components/cards/ProductCard/index';
import Footer from 'components/Home/Footer';

const Product = () => {
    const { id } = useParams();
    const arr = [1, 2, 3, 4];

    return (
        <Box mt="50px">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <img
                            src="https://themes-themegoods.b-cdn.net/grandrestaurantv6/wp-content/uploads/2015/05/trendy-cloud-or-fluffy-egg-dish-on-wooden-plate-to-TFBWUKH.jpg"
                            alt=""
                            width="100%"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Fresh Crab With Lemon</Typography>
                        <Typography>$12.55</Typography>
                        <Typography>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
                            quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
                            ultricies mi vitae est. Mauris placerat eleifend leo.
                        </Typography>
                        <form>
                            <FormControl>
                                <FormLabel id="label-placement">Size</FormLabel>
                                <RadioGroup row aria-labelledby="placement" name="position" defaultValue="Normal">
                                    <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
                                    <FormControlLabel value="Medium" control={<Radio />} label="Medium (+$3.00)" />
                                    <FormControlLabel value="Large" control={<Radio />} label="Large (+$5.00)" />
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
                    </Grid>
                </Grid>
                <DescriptionAndReview />
                <Grid container spacing={3}>
                    {arr.map((i) => (
                        <Grid item xs={12} sm={6} md={3} display="flex" flexDirection="column" alignItems="center">
                            <ProductCard key={i} url={`menu/${i}`} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </Box>
    );
};

export default Product;
