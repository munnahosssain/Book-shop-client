import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    // const { productId } = useParams();
    // const [product, setProduct] = useState([]);


    // useEffect(() => {
    //     const url = 'books.json';
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setProduct(data))
    // }, []);

    // const findProduct = [...product];

    // const products = findProduct.find(pd => pd.id === productId);

    return (
        <div>
            <p>product id: </p>
        </div>
    );
};

export default ProductDetails;