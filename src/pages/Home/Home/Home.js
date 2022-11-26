import React, { useState } from 'react';
import ItemProduct from './ItemProduct';
import Cart from '../Review/Cart';
import useFetch from '../../../hooks/useFetch';

const Home = () => {
    const [product, setProduct] = useFetch();
    const [cart, setCart] = useState([]);

    console.log(product);

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