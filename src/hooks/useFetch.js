import { useEffect, useState } from 'react';

const useFetch = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://book-shop-server.onrender.com/books')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    return [product, setProduct];
};

export default useFetch;