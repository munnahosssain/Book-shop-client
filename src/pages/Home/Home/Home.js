import React, { useEffect, useState } from 'react';
import ItemProduct from './ItemProduct';
import Cart from '../Review/Cart';

const Home = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const url = 'books.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const addProducts = (product) => {
        setCart(product.id);
        console.log(cart);
    }

    return (
        <div className='flex px-20'>
            <div className='flex grid gap-y-8 gap-x-8 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2'>
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
            <div>
                <Cart/>
                
            </div>
        </div>
    );
};

export default Home;