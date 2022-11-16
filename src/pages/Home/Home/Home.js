import React, { useEffect, useState } from 'react';
import ItemProduct from './ItemProduct';

const Home = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    });

    const addProducts = (product) => {
        console.log("clicked add product");
    }

    return (
        <div>
            {/* <h1 className=''>You clicked {product.length} times</h1> */}
            {
                product.map(product =>
                    <ItemProduct
                        key={product.id}
                        product={product}
                        addProducts={addProducts}
                    />
                )
            }
        </div>
    );
};

export default Home;