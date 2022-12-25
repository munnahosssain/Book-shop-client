import { useEffect, useState } from 'react';

const useFetch = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const url = 'https://book-shop-server.onrender.com/books';
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    return [product, setProduct];
};

export default useFetch;