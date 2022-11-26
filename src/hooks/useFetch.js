import { useEffect, useState } from 'react';

const useFetch = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const url = 'books.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    return [product, setProduct];
};

export default useFetch;