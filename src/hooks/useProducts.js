import { useEffect, useState } from 'react';
import axios from '../axios';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [limit, setLimit] = useState(12);

    useEffect(() => {
        const fetchProduct = async () => {
            await axios.get(`api/v1/products?pageNo=${pageNo}&limit=${limit}`).then((res) => {
                setProducts(res.data);
            });
        };

        fetchProduct();
    }, [limit, pageNo]);
    return [products, setPageNo, setLimit];
};

export default useProducts;
