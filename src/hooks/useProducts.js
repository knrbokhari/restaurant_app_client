import { useEffect, useState } from 'react';
import axios from '../axios';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            await axios.get('api/v1/products').then((res) => {
                setProducts(res.data);
            });
        };

        fetchProduct();
    }, []);
    return [products];
};

export default useProducts;
