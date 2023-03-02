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
import ProductForm from './ProductForm';

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
                        <ProductForm product="product" />
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
